const userTemp = `
<div class="card author-box card-primary">
    <div class="card-body">
    <div class="author-box-left">
        <img alt="image" src="/assets/img/avatar/avatar-1.png" class="rounded-circle author-box-picture">
        <div class="clearfix"></div>
        <!-- <a href="#" class="btn btn-primary mt-3 follow-btn" data-follow-action="alert('follow clicked');" data-unfollow-action="alert('unfollow clicked');">Follow</a> -->
    </div>
    <div class="author-box-details">
        <div class="author-box-name">
            <a href="#"> {{ firstname }} {{ lastname }}</a>
        </div>
        <div class="author-box-job">Photographer</div>
        <div class="author-box-description">
        <p>{{ profile.description }}</p>
        </div>

        <div class="">
            <div v-for="category in profiles" class="badge badge-primary mt-1 mb-1 ml-1 mr-1">{{ category.name }}</div>
        </div>


        <!--
        
        <div class="mb-2 mt-3"><div class="text-small font-weight-bold">Follow {{ firstname }}</div></div>
       
        
        <a v-if="profile.facebook_url" :href="profile.facebook_url" class="btn btn-social-icon mr-1 btn-facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a v-if="profile.twitter_url"  :href="profile.twitter_url" class="btn btn-social-icon mr-1 btn-twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a v-if="profile.instagram_url" :href="profile.instagram_url" class="btn btn-social-icon mr-1 btn-instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a v-if="profile.website_url" :href="profile.website_url" class="btn btn-social-icon mr-1 btn-instagram">
            <i class="far fa-browser"></i>
        </a>
        -->

    </div>
    </div>
</div>

`;

Vue.component('user-profile', {
    template: userTemp,
    data: function() {
        return {
            profile: null
        }
    },
    props: ['firstname', 'lastname', 'categories', 'user'],
    created: function() {
        this.profiles = JSON.parse(this.categories);

        this.profile = JSON.parse(this.user);

        console.log(this.profile);
    }
});