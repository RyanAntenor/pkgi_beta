"use strict";


(function($, window, i) {
    // Bootstrap 4 Modal
    $.fn.fireModal = function(options) {
        var options = $.extend({
            size: 'modal-md',
            center: false,
            animation: true,
            title: 'Modal Title',
            closeButton: true,
            header: true,
            bodyClass: '',
            footerClass: '',
            body: '',
            buttons: [],
            autoFocus: true,
            removeOnDismiss: false,
            created: function() {},
            appended: function() {},
            onFormSubmit: function() {},
            modal: {}
        }, options);

        this.each(function() {
            i++;
            var id = 'fire-modal-' + i,
                trigger_class = 'trigger--' + id,
                trigger_button = $('.' + trigger_class);

            $(this).addClass(trigger_class);

            // Get modal body
            let body = options.body;

            if (typeof body == 'object') {
                if (body.length) {
                    let part = body;
                    body = body.removeAttr('id').clone().removeClass('modal-part');
                    part.remove();
                } else {
                    body = '<div class="text-danger">Modal part element not found!</div>';
                }
            }

            // Modal base template
            var modal_template = '   <div class="modal' + (options.animation == true ? ' fade' : '') + '" tabindex="-1" role="dialog" id="' + id + '">  ' +
                '     <div class="modal-dialog ' + options.size + (options.center ? ' modal-dialog-centered' : '') + '" role="document">  ' +
                '       <div class="modal-content">  ' +
                ((options.header == true) ?
                    '         <div class="modal-header">  ' +
                    '           <h5 class="modal-title">' + options.title + '</h5>  ' +
                    ((options.closeButton == true) ?
                        '           <button type="button" class="close" data-dismiss="modal" aria-label="Close">  ' +
                        '             <span aria-hidden="true">&times;</span>  ' +
                        '           </button>  ' :
                        '') +
                    '         </div>  ' :
                    '') +
                '         <div class="modal-body">  ' +
                '         </div>  ' +
                (options.buttons.length > 0 ?
                    '         <div class="modal-footer">  ' +
                    '         </div>  ' :
                    '') +
                '       </div>  ' +
                '     </div>  ' +
                '  </div>  ';

            // Convert modal to object
            var modal_template = $(modal_template);

            // Start creating buttons from 'buttons' option
            var this_button;
            options.buttons.forEach(function(item) {
                // get option 'id'
                let id = "id" in item ? item.id : '';

                // Button template
                this_button = '<button type="' + ("submit" in item && item.submit == true ? 'submit' : 'button') + '" class="' + item.class + '" id="' + id + '">' + item.text + '</button>';

                // add click event to the button
                this_button = $(this_button).off('click').on("click", function() {
                    // execute function from 'handler' option
                    item.handler.call(this, modal_template);
                });
                // append generated buttons to the modal footer
                $(modal_template).find('.modal-footer').append(this_button);
            });

            // append a given body to the modal
            $(modal_template).find('.modal-body').append(body);

            // add additional body class
            if (options.bodyClass) $(modal_template).find('.modal-body').addClass(options.bodyClass);

            // add footer body class
            if (options.footerClass) $(modal_template).find('.modal-footer').addClass(options.footerClass);

            // execute 'created' callback
            options.created.call(this, modal_template, options);

            // modal form and submit form button
            let modal_form = $(modal_template).find('.modal-body form'),
                form_submit_btn = modal_template.find('button[type=submit]');

            // append generated modal to the body
            $("body").append(modal_template);

            // execute 'appended' callback
            options.appended.call(this, $('#' + id), modal_form, options);

            // if modal contains form elements
            if (modal_form.length) {
                // if `autoFocus` option is true
                if (options.autoFocus) {
                    // when modal is shown
                    $(modal_template).on('shown.bs.modal', function() {
                        // if type of `autoFocus` option is `boolean`
                        if (typeof options.autoFocus == 'boolean')
                            modal_form.find('input:eq(0)').focus(); // the first input element will be focused
                        // if type of `autoFocus` option is `string` and `autoFocus` option is an HTML element
                        else if (typeof options.autoFocus == 'string' && modal_form.find(options.autoFocus).length)
                            modal_form.find(options.autoFocus).focus(); // find elements and focus on that
                    });
                }

                // form object
                let form_object = {
                    startProgress: function() {
                        modal_template.addClass('modal-progress');
                    },
                    stopProgress: function() {
                        modal_template.removeClass('modal-progress');
                    }
                };

                // if form is not contains button element
                if (!modal_form.find('button').length) $(modal_form).append('<button class="d-none" id="' + id + '-submit"></button>');

                // add click event
                form_submit_btn.click(function() {
                    modal_form.submit();
                });

                // add submit event
                modal_form.submit(function(e) {
                    // start form progress
                    form_object.startProgress();

                    // execute `onFormSubmit` callback
                    options.onFormSubmit.call(this, modal_template, e, form_object);
                });
            }

            $(document).on("click", '.' + trigger_class, function() {
                let modal = $('#' + id).modal(options.modal);

                if (options.removeOnDismiss) {
                    modal.on('hidden.bs.modal', function() {
                        modal.remove();
                    });
                }

                return false;
            });
        });
    }

    // Bootstrap Modal Destroyer
    $.destroyModal = function(modal) {
        modal.modal('hide');
        modal.on('hidden.bs.modal', function() {});
    }
})(jQuery, this, 0)


if (jQuery().summernote) {

    let uploadBox = `
    <form action="#" class="dropzone" id="mydropzone">
        <div class="fallback">
            <input name="file" type="file" multiple />
        </div>
    </form>
    `;
    $('#uploadModal').fireModal({
        size: 'modal-lg',
        paramName: 'images',
        title: 'Upload picture',
        body: uploadBox,
        appended: function() {

            const myDropzone = $("#mydropzone").dropzone({
                uploadMultiple: true,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: "/api/upload",
                success: function(data, resp) {
                    console.log(resp);
                    let url_file = '/uploads/' + resp[0].filename;
                    $('.summernote-blog').summernote('editor.insertImage', url_file, resp[0].filename);
                    $('.close').click();
                },
                complete: function(file) {
                    this.removeFile(file);
                    // console.log(file);
                }
            });
        },
        buttons: [{
            text: 'Click, me!',
            class: 'btn btn-primary btn-shadow',
            handler: function(modal) {
                // alert('Hello, you clicked me!');
                $.destroyModal(modal);

            }
        }],
    });

    let galleryBox = `
        <div class="card">
            <div class="card-header">
                <h4>Gallery <code>.gallery-md</code></h4>
                </div>
                <div class="card-body">
                <div class="gallery gallery-md">
                    <div class="gallery-item" data-image="/uploads/5db5b17bce443.jpg" data-title="Image 1"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img14.jpg" data-title="Image 2"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img08.jpg" data-title="Image 3"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img05.jpg" data-title="Image 4"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img11.jpg" data-title="Image 5"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img09.jpg" data-title="Image 6"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img12.jpg" data-title="Image 8"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img13.jpg" data-title="Image 9"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img14.jpg" data-title="Image 10"></div>
                    <div class="gallery-item" data-image="../assets/img/news/img15.jpg" data-title="Image 11"></div>
                    <div class="gallery-item gallery-more" data-image="../assets/img/news/img08.jpg" data-title="Image 12">
                    <div>+2</div>
                    </div>
                    <div class="gallery-item gallery-hide" data-image="../assets/img/news/img01.jpg" data-title="Image 9"></div>
                </div>
            </div>
        </div>
    `;

    let mediaItemArr = [];
    let mediaBox = `
            <div class="card">
                <div class="card-body">
                    <div id="media-box" class="gallery gallery-md">
                        <div class="gallery-item media-item" data-image="/assets/img/news/img10.jpg" data-title="Image 1"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img14.jpg" data-title="Image 2"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img08.jpg" data-title="Image 3"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img05.jpg" data-title="Image 4"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img11.jpg" data-title="Image 5"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img09.jpg" data-title="Image 6"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img12.jpg" data-title="Image 8"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img13.jpg" data-title="Image 9"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img14.jpg" data-title="Image 10"></div>
                        <div class="gallery-item media-item" data-image="/assets/img/news/img15.jpg" data-title="Image 11"></div>
                    </div>
                </div>
            </div>
    `;

    let mediaCard = document.createElement('div');
    mediaCard.classList.add('card');

    let mediaCardBody = document.createElement('div');
    mediaCardBody.classList.add('card-body');

    let mediaDiv = document.createElement('div');
    mediaDiv.id = "media-box";
    mediaDiv.classList.add('gallery', 'gallery-md');

    axios.get('/api/media/all').then(function(resp) {
        let imageList = resp.data;
        let imageArr = [];
        imageList.forEach(imgObj => {
            let imgNode = document.createElement('img');
            // imgNode.src = imgObj.filename;
            imgNode.classList.add('gallery-item', 'media-item');
            imgNode.dataset.image = '/uploads/' + imgObj.filename;
            imgNode.src = '/uploads/' + imgObj.filename;
            // imgNode.dataset.image = "/assets/img/news/img10.jpg";
            imgNode.dataset.title = "";
            // imageArr.push(imgNode);
            mediaDiv.appendChild(imgNode);
        });

        mediaCardBody.appendChild(mediaDiv);
        mediaCard.appendChild(mediaCardBody);

        console.log(mediaCard.outerHTML);

        // let imgNode = document.createElement('img');
        // console.log(resp.data);


        $('.js-uploadDialogBtn').fireModal({
            title: 'Images',
            size: 'modal-lg',
            paramName: 'images',
            body: mediaCard.outerHTML,
            // body: mediaBox,
            created: function() {


            },
            appended: function() {
                // console.log('appended');
                // $('#media-box .media-item').click(evt => {
                //     // $('.gallery-item').removeClass('.active');

                //     // console.log(evt);
                //     alert('clicked');
                //     $(this).addClass('active');
                // });

                let mediaItems = document.querySelectorAll('.media-item');
                mediaItems.forEach(function(item) {
                    item.addEventListener('click', evt => {

                        mediaItems.forEach(function(i) {
                            i.classList.remove('active');
                        });

                        item.classList.add('active');
                        let selectedImg = item.dataset.image;

                        let img = document.createElement('img');
                        img.src = selectedImg;
                        img.style = 'width: 100%';

                        $('.js-feature-img').html(img);
                        $('#feature_img').val(selectedImg);
                    })
                });
            },
            buttons: [{
                text: 'Close',
                class: 'btn btn-primary btn-shadow',
                handler: function(modal) {
                    // alert('Image selected');
                    $.destroyModal(modal);
                }
            }]
        });

    })



    $('#viewPhotosModal').fireModal({
        size: 'modal-lg',
        paramName: 'images',
        title: 'Insert picture(s)',
        body: galleryBox,
    });




    const UploadButton = function(context) {
        var ui = $.summernote.ui;

        // create button
        var button = ui.button({
            contents: '<i class="fa fa-image"/> Upload Image',
            tooltip: 'upload-image',
            click: function() {
                // invoke insertText method with 'hello' on editor module.
                // context.invoke('editor.insertText', 'hello');
                let url = "https://images.unsplash.com/photo-1568322503878-6c2762c21724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
                let filename = "testimage.jpg";
                // $('.summernote-blog').summernote('insertImage', url, filename);

                $('#uploadModal').click();
            }
        });

        return button.render(); // return button as jquery object
    }

    const insertPhotoButton = function(context) {
        var ui = $.summernote.ui;

        // create button
        var button = ui.button({
            contents: '<i class="fa fa-image"/> Add Image',
            tooltip: 'insert-image',
            click: function() {
                $('#viewPhotosModal').click();
            }
        });

        return button.render(); // return button as jquery object
    }



    $(".summernote-blog").summernote({
        dialogsInBody: true,
        minHeight: 150,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough']],
            ['para', ['paragraph']],
            ['view', ['codeview']],
            ['mybutton', ['uploadBtn', 'insertImgBtn']]

        ],
        buttons: {
            uploadBtn: UploadButton,
            insertImgBtn: insertPhotoButton
        },

        // callbacks: {
        //     onImageLinkInsert: function() {
        //         console.log('opened link insert');
        //     }
        // }
    });
}