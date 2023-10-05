function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(datas => {

        const postcontainer = document.getElementById("post_container");
        

        for(const post of datas){
            let postDIV = document.createElement('div');
            postDIV.classList.add("post");
            postDIV.innerHTML = `
            <h4 class = 'post-id'>Post ID : ${post.id} </h4>
            <h5>Post Title : ${post.title}</h5>
            <h5>Post Description : ${post.body}</h5>

            <button onclick='handleCommets(${post.id})'>Show Comments</button> 
                    `;

            postcontainer.appendChild(postDIV);
        }
    })
}

loadData();