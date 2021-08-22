const Blogs = document.getElementsByClassName('blog');
    for (const blog of Blogs) {
        blog.style.backgroundColor = 'grey';
        blog.style.margin = '10px';
        blog.style.padding = '20px';
    }

    const secondTitle = document.getElementById('second-title');
    secondTitle.style.textAlign = 'center';
    secondTitle.style.backgroundColor = 'green';
    secondTitle.style.color = 'white';
    secondTitle.style.padding = '20px';

const test = document.getElementsByTagName('h1');
test[0].style.color = 'red';
console.log(test);

const blogList = document.getElementById('blog-list')
const element = document.createElement("li");
element.innerText = 'faruk';
blogList.appendChild(element)

        
 