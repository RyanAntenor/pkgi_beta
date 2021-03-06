const createPost = `
<div class="card">
<div class="card-header">
    <h4>Write Your Post</h4>
</div>
<div class="card-body">
    <form id="create-post" method="POST" action="/admin/post/create">
        <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
        <div class="form-group row mb-4">
            <label class="col-form-label col-12">Title</label>
            <div class="col-sm-12">
                    <input name="title" autofocus="true" type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row mb-4">
                <label class="col-form-label col-12">Permalink</label>
                <div class="col-sm-12">
                    <input id="permalink" name="permalink" type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row mb-4">
                <label class="col-form-label col-12">Category</label>
                <div class="col-sm-12">
                    <select name="category" class="form-control selectric">
                        <option>Uncategorized</option>
                        <option>Tech</option>
                        <option>News</option>
                        <option>Political</option>
                    </select>
                </div>
            </div>

            <div class="form-group row mb-4">
                <label class="col-form-label col-12">Summary Note</label>
                <div class="col-sm-12">
                    <textarea name="summary" class="form-control"  style="height:130px">{{ post.summary }}</textarea>
                </div>
            </div>
            <div class="form-group row mb-4">
                <label class="col-form-label col-12">Content</label>
                <div class="col-sm-12">
                    <textarea name="body" class="summernote-blog"></textarea>
                </div>
            </div>
            
            <div class="form-group row mb-4">
                <label class="col-form-label col-12"></label>
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary">Create Post</button>
                </div>
            </div>
        </form>
    </div>
</div>
`;

Vue.component('create-post', {
    template: createPost
})