let blogs = []; //lengthnya adalah 0

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let imageInput = document.getElementById("input-blog-image");

  if (title == "" || content == "" || imageInput == "") {
    return alert("All input fields cannot be empty!");
  }

  image = URL.createObjectURL(imageInput.files[0]);

  let blog = {
    author: "Iim Abdul Karim",
    title: title,
    content: content,
    image: image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  console.log(blogs);

  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    let formattedDate = formatDateToWIB(blogs[i].postedAt);
    // menampilkan blogs yang sudah dibuat dengan mengisi form
    console.log(blogs[i]);

    blogListElement.innerHTML += `
        <div id="${i}" class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                  ${blogs[i].title}
                </a>
              </h1>
              <div class="detail-blog-content">
                ${formattedDate} | ${blogs[i].author}
              </div>
              <p class="blog-text">
                ${blogs[i].content}
              </p>
              <p class="relative-time">${getRelativeTime(blogs[i].postedAt)}</p>
            </div>
          </div>
    `;
  }
}

function firstBlogContent() {
  return `
        <div class="blog-list-item">
            <div class="blog-image">
              <img src="assets/blog.jpg" alt="blog-image" />
            </div>
            <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" class="blog-item-title">
                  Blog Title with JS
                </a>
              </h1>
              <div class="detail-blog-content">
                05 Dec 2024 10:30 WIB | Iim Abdul Karim
              </div>
              <p class="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                explicabo totam labore sit tempore, voluptate vitae nesciunt in
                maiores rerum, vero veritatis numquam iure aut sunt nemo.
              </p>
            </div>
          </div>
    `;
}

function formatDateToWIB(date) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;
  return formattedDate;
}

function getRelativeTime(targetDate) {
  let now = new Date();
  let diffInSeconds = Math.floor((now - targetDate) / 1000);

  console.log(diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }
}
