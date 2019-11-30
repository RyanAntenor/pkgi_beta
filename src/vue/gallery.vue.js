const galleryTemp = `
<div class="card">
    <!--
    <div class="card-header">
        <h4>Gallery</h4> 
    </div>
    -->
    <div class="card-body">
        <div class="gallery gallery-md">
            <div v-for="img in images" :data-image="img.filepath" data-title="Image 1" class="gallery-item" :href="img.filepath" title="Image 1" :style="'background-image: url(' + img.filepath  + ');'"></div>
        </div>
    </div>
</div>
`;

Vue.component('gallery', {
    template: galleryTemp,
    data: function() {
        return {
            images: [

            ]
        }
    },
    mounted() {
        this.getImages();
    },
    created() {
        let _ = this;
        _.$root.$on('updateGallery', (files) => {
            // files.forEach(img_file => {
            //     debugger;
            //     this.images.push(img_file);
            // });

            _.getImages();

            // debugger;
            // this.images = [
            //     { filename: '/assets/img/news/img01.jpg' }
            // ];


            $(".gallery .gallery-item").each(function() {
                var me = $(this);

                me.attr('href', me.data('image'));
                me.attr('title', me.data('title'));
                if (me.parent().hasClass('gallery-fw')) {
                    me.css({
                        height: me.parent().data('item-height'),
                    });
                    me.find('div').css({
                        lineHeight: me.parent().data('item-height') + 'px'
                    });
                }
                me.css({
                    backgroundImage: 'url("' + me.data('image') + '")'
                });
            });

        });

    },
    methods: {
        getImages: function() {
            let _ = this;
            axios.get('/api/media/all').then(res => {
                // res.data.map(img => img.filename = '/' + img.filename);
                _.images = res.data;
                // console.log(res.data);
            });
        }
    }
});