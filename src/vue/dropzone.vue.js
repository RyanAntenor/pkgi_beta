const dropzoneTemplate = `
<div class="card">
    <div class="card-header">
    <h4>Upload Images</h4>
    </div>
    <div class="card-body">
    <form action="#" class="dropzone" id="mydropzone">
        <div class="fallback">
        <input name="file" type="file" multiple />
        </div>
    </form>
    </div>
</div>
`;

// Define a new component called todo-item
Vue.component('dropzone', {
    template: dropzoneTemplate,
    created: function() {

    },
    mounted: function() {
        let _ = this;

        const myDropzone = $("#mydropzone").dropzone({
            uploadMultiple: true,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: "/api/upload",
            success: function(data, files) {
                _.$root.$emit('updateGallery', files);
            },
            complete: function(file) {
                this.removeFile(file);
            }
        });

        myDropzone.on('complete', function(file) {
            console.log('removing all files');
            myDropzone.removeAllFiles();
        });
    }
});