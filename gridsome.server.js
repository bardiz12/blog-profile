// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals');
projectData = [
  {
      title:"Pioneer Transactions Web Multi Languange",
      details:"Creating a mutli language system for a website",
      tech:"I use Wordpress,Divi, and a multi languange plugin",
      category:"Web Apps",
      client:"Fiverr client",
      links:{
          github:null,
          url:"https://pioneertransactions.com/"
      },
      images:[
          'https://i.imgur.com/BmI2Gfi.jpg'
      ]
  },
  
  {
      title: "Data Collection for Diabetics from instagram based on ages and location",
      details:"Data mining on instagram to search for accounts that indicates they are Diabetics. using some filtering based on location of their post and faces that exist in Profile picture we can determine the location and ages of those diabetics. this project also use some keyword and scanned list of some diabet related tags/accounts to find diabetics account. the accuracy for collected diabetics account is quiet Well, above 90%",
      category:"Data Mining & Extraction",
      client:"Fiverr Client",
      tech:"I write my own scrapper and use my own algorithm (not the best for Data Collection) but it works great for this project but the collection time is taking time so long.",
      links:{
          github: null,
          url: null,
      },images:[
          'https://i.imgur.com/Z3iy04I.png'
      ]
  },
  {
      title:"Instagram Photo Downloader With Face Filter using Image Recognition",
      details:"Creating an instagram batch photo downloader that collect photo automaticaly and add Face Filters. so the downloaded image will be have faces not a paintings or other images. this project is created for my client from India via Fiverr.",
      category:"Data Mining & Extraction",
      tech:"i write my own scrapper with Laravel-Zero CLI Framework and use Google Cloud Computing services",
      client:"Fiverr Client",
      links:{
          github: null,
          url:null
      },
      images:[
          'https://i.imgur.com/gcZTb0p.png'
      ]           
  },
  {
      title: "Bipa Placement Test",
      details: "Bipa is Stands for Bahasa Indonesia bagi Penutur Asing or Bahasa Indonesia for foreigners. this placement test takes user to 3 level test, starting from reading section, word part fills, and sentence ordering. the result is a sum of point that indicates the level of how foreigners understands Bahasa Indonesia.",
      tech:"I use Laravel, Bootstrap CSS and jQuery for this project",
      category: "Web Apps",
      client:"A. Habibi (Unnes)",
      links:{
          github:null,
          url:"http://165.22.110.146/"
      },
      images:[
          'https://i.imgur.com/MGPTShF.png',
          'https://i.imgur.com/NfUXkbs.png',
          'https://i.imgur.com/1mhRUN8.png',
          'https://i.imgur.com/nuhwVWT.png'
      ]
  },
  {
      title: "Gondang Flora Database",
      details: "This is the first project that i build using Vue for frontend. i create this project for one of my agenda in Community Service Program (we called it Kuliah Kerja Nyata or KKN). the idea is to collect all Flora's data that exists in place. and the data is stored in MySQL Database.",
      tech: "i use Laravel for the backend and Vue.js for the frontend with Bootstrap CSS framework",
      category: "Web Apps",
      client: "TIM KKN Kemitraan Gondang 2019",
      links:{
          github: "https://github.com/bardiz12/flora-database",
          url: "https://flora.gondang.id/"
      },
      images:[
          'https://user-images.githubusercontent.com/25524265/68070381-00b57f00-fda0-11e9-979c-535d764ab7e8.png',
          'https://user-images.githubusercontent.com/25524265/68070341-b0d6b800-fd9f-11e9-8a56-9db63c11d135.jpg',
          'https://user-images.githubusercontent.com/25524265/68070350-bfbd6a80-fd9f-11e9-919d-bc274ccc3e7d.png',
          
          'https://user-images.githubusercontent.com/25524265/68070430-aff25600-fda0-11e9-8b62-049d4df6b686.png'
      ]
  }
]
module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const projects = addCollection({
      typeName: 'ProjectItem'
    })

    const datas = projectData;
    for (let i = 0; i < datas.length; i++) {
      const element = datas[i];
      projects.addNode(element);
    }
  })

  api.createPages(({ createPage }) => {
    /*createPage({
      path: '/project/:id(\\d+)',
      component: './src/templates/projectDetail.vue'
    })*/
  })

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^Vuetify/]
        })
      ]);
    }
  });
}
