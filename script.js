

const menCategories=[
    {
        id:1,
        image:"./assets/img-5.jpg",
        type:"Shirts"
    },
    {
        id:2,
        image:"./assets/img-6.jpg",
        type:"Printed T-Shirts"
    },
    {
        id:3,
        image:"./assets/img-7.jpg",
        type:"Plain T-Shirts"
    },
    {
        id:4,
        image:"./assets/img-8.jpg",
        type:"Polo T-Shirts"
    },
    {
        id:5,
        image:"./assets/img-9.jpg",
        type:"Hoodies & Sweettshirts"
    },
    {
        id:6,
        image:"./assets/img-10.jpg",
        type:"Jeans"
    },
    {
        id:7,
        image:"./assets/img-24.jpg",
        type:"Shirts"
    },
    {
        id:8,
        image:"./assets/img-11.jpg",
        type:"Boxers"
    },
]

const womenCategories=[
    {
        id:1,
        image:"./assets/img-12.jpg",
        type:"Hoodies & Sweettshirts"
    },
    {
        id:2,
        image:"./assets/img-13.jpg",
        type:"Coats & Parkas"
    },
    {
        id:3,
        image:"./assets/img-14.jpg",
        type:"Tees & T-Shirt"
    },
    {
        id:4,
        image:"./assets/img-15.jpg",
        type:"Boxers"
    },
]


const render=()=>{
    const menContent=document.getElementById("men-content");
    const womenContent=document.getElementById("women-content");

    menCategories.forEach(item=>{
    const menCategoryCard=document.createElement("div");
    menCategoryCard.classList.add("item")

        
        menCategoryCard.innerHTML=`
                    <img src=${item.image} /><br/>
                    <b>${item.type}</b>
                    <div class="frexpwrap">
                        <a href="" class="frexp">Explore Now</a>
                    <a href="" class="frarrow">
                        <img src="./assets/arrow-right.svg"/>
                    </a>
                    </div>
            `;

            menContent.appendChild(menCategoryCard)

    });
    womenCategories.forEach(item=>{
        const womenCategoryCard=document.createElement("div");
        womenCategoryCard.classList.add("item");
                womenCategoryCard.innerHTML=`
                        <img src=${item.image} /><br/>
                <b>${item.type}</b>
                <div class="frexpwrap">
                    <a href="" class="frexp">Explore Now</a>
                <a href="" class="frarrow">
                    <img src="./assets/arrow-right.svg"/>
                </a>
                </div>
                    `;
        
                    womenContent.appendChild(womenCategoryCard)
        
            });
}

// Call the function to map data to HTML after the page loads
window.onload = render;