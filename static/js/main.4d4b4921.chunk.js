(this["webpackJsonpwip-website"]=this["webpackJsonpwip-website"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/cake1.003c9374.jpg"},53:function(e,t,a){e.exports=a(85)},59:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/coding.3075ec8d.png"},68:function(e,t,a){e.exports=a.p+"static/media/cooking.81c629ba.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/blog.893045be.png"},70:function(e,t,a){e.exports=a.p+"static/media/microsoft.222ac9fa.png"},71:function(e,t,a){e.exports=a.p+"static/media/jhu.aa46b658.png"},72:function(e,t,a){e.exports=a.p+"static/media/hltcoe.d18866d5.png"},73:function(e,t,a){e.exports=a.p+"static/media/hltcoe_poster.893912bf.pdf"},74:function(e,t,a){e.exports=a.p+"static/media/textron.38cc8470.png"},75:function(e,t,a){e.exports=a.p+"static/media/textron_poster.a5b6a1e8.pdf"},76:function(e,t,a){e.exports=a.p+"static/media/textron_heatmaps.17a23f5d.pdf"},77:function(e,t,a){e.exports=a.p+"static/media/bsph.d60ab465.png"},78:function(e,t,a){e.exports=a.p+"static/media/mhs.73593e8a.png"},79:function(e,t,a){e.exports=a.p+"static/media/profpic.80a2b3fc.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/SimonZengResumeSofDev.b90979fa.pdf"},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);a(54);var n=a(0),i=a.n(n),l=a(25),c=a.n(l),r=(a(59),a(17)),o=a(18),s=a(23),m=a(21),d=(a(60),a(30)),u=a(5),p=a(29),h=a(45),f=a(87),g=a(48);var E=function(e){var t=e.timelineItems;return i.a.createElement(p.a,null,i.a.createElement(h.a,null,t&&t.map((function(e,t){var a,n=e.company,l=e.title,c=e.location,r=e.description,o=e.image,s=e.firstLinkPath,m=e.firstLinkText,d=e.secondLinkPath,u=e.secondLinkText;return a=s||d?function(e,t,a,n){return i.a.createElement("span",null,i.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},t),i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n))}(s,m,d,u):"",i.a.createElement(p.a,{className:"timeline-item"},i.a.createElement(f.a,null,i.a.createElement(h.a,{sm:4,lg:4},i.a.createElement("div",{class:"timeline-image-parent mx-auto"},i.a.createElement("img",{class:"timeline-image",src:o,alt:"company"}))),i.a.createElement(h.a,{className:"timeline-text",sm:4,lg:8},i.a.createElement("h3",null,n),i.a.createElement("h4",null,l),i.a.createElement("h4",null,c),i.a.createElement("p",null,r," ",i.a.createElement("br",null),a,i.a.createElement("br",null)))))}))))},v=function(e){var t=e.interestLinks;return i.a.createElement(p.a,null,i.a.createElement(f.a,null,t&&t.map((function(e,t){var a=e.title,n=e.caption,l=e.image,c=e.link;return i.a.createElement(h.a,{md:4},i.a.createElement(d.b,{to:c},i.a.createElement("div",{class:"interest-item mx-auto"},i.a.createElement("div",{class:"interest-item-caption d-flex align-items-center justify-content-center h-100 w-100"},i.a.createElement("div",{class:"interest-item-caption-content text-center text-white"},i.a.createElement("p",null,n))),i.a.createElement("img",{class:"img-fluid",src:l,alt:"cannot find"}))),i.a.createElement("h3",{class:"interest-title text-center"},a))}))))},b=a(34),x=a(11),k=a(88),y=a(47),w=a(89),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={showForm:!1},e}return Object(o.a)(a,[{key:"showForm",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(k.a,{inline:!0},i.a.createElement(y.a,{className:"form-custom",type:"text",placeholder:"Search"}),i.a.createElement(g.a,{className:"btn-postclick custom-nav-link",onClick:function(){return e.search()}},"Search")),i.a.createElement(w.a,{variant:"warning",onClose:function(){return e.hideForm()},dismissible:!0},i.a.createElement(w.a.Heading,null,"Oh snap! You got an error!"),i.a.createElement("p",null,"Search is not functional yet :(")))}},{key:"showButton",value:function(){var e=this;return i.a.createElement(g.a,{className:"btn-preclick custom-nav-link",onClick:function(){return e.openForm()}},"Search")}},{key:"openForm",value:function(){this.setState({showForm:!0})}},{key:"hideForm",value:function(){this.setState({showForm:!1})}},{key:"search",value:function(){return i.a.createElement("div",null)}},{key:"render",value:function(){return this.state.showForm?this.showForm():this.showButton()}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1,atTop:!0},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){var t=window.scrollY<100;t!==e.state.atTop&&e.setState({atTop:!1}),t&&e.setState({atTop:!0})}))}},{key:"render",value:function(){return i.a.createElement(b.a,{collapseOnSelect:!0,expand:"lg",className:this.state.isOpen?"navbar-open":"navbar-close",variant:"dark",bg:this.state.atTop?"dark":"",sticky:"top"},i.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:this.toggleCollapse}),i.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(p.a,null,i.a.createElement(x.a.Link,{className:"custom-nav-link",href:"#about"},"About"),i.a.createElement(x.a.Link,{className:"custom-nav-link",href:"#timeline"},"Timeline"),i.a.createElement(x.a.Link,{className:"custom-nav-link",href:"#interests"},"Interests"),i.a.createElement(x.a.Link,{className:"custom-nav-link",href:"#contact"},"Contact"),i.a.createElement(L,null))))}}]),a}(n.Component),j=function(){var e=[{title:"Coding Projects",caption:"Side projects that I\u2019ve worked on in the past, ranging from Android apps to NLP-related projects (chatbots, search engines, etc)",image:a(67),link:"./coding"},{title:"Cooking & Baking",caption:"Recipes that I\u2019ve used and developed upon as well as pictures of what I\u2019ve cooked and baked in my free time.",image:a(68),link:"./cooking"},{title:"Blog",caption:"Articles and posts that I\u2019ve made about a range of topics, like machine learning topics and how to pair wines to meals.",image:a(69),link:"./recipe"}],t=[{company:"Microsoft",title:"Software Engineer, Starting in August 2020",location:"Redmond, Washington",description:"Looking forward to seeing which team I join!",image:a(70),firstLinkPath:null,firstLinkText:null,secondLinkPath:null,secondLinkText:null},{company:"Johns Hopkins University",title:"B.S. in Computer Science/Cognitive Science, graduated May 2020",location:"Baltimore, Maryland",description:"My academic focus was primarily Natural Language Processing, resulting in a courseload rich with linguistics, artificial intelligence, math and computer science. Although this resulted in the most academically rigorous years of my life, Johns Hopkins provided for me endless opportunities to expand the ceiling of my knowledge and passion while surrounding me with inspiring peers: something I\u2019ll forever cherish and look fondly upon.",image:a(71),firstLinkPath:null,firstLinkText:null,secondLinkPath:null,secondLinkText:null},{company:"Human Language Technology Center of Excellence",title:"Visiting Researcher/Part-time Researcher, May 2019 - February 2020",location:"Baltimore, Maryland",description:"During the summer, my team designed and constructed neural architectures to capture document-level ontologies to improve NER results through multi-task learning. We also improved multi-label topic identification F1 accuracies by 0.33 in Russian and 0.35 in Chinese using transfer learning and BERT embeddings. I continued this research independently but focused more on using deep metric learning to create document-level representations in low resource situations. ",image:a(72),firstLinkPath:a(73),firstLinkText:"See Poster",secondLinkPath:null,secondLinkText:null},{company:"Textron Systems",title:"Software Development Intern, August 2018 - May 2019",location:"Hunt Valley, Maryland",description:"My team investigated the usage of hyperspectral imaging in food allergen detection to create a commercially viable product. In doing so, we developed a pixel-by-pixel allergen detection algorithm that achieved 98% binary and 75% multinomial accuracy using machine learning techniques. We then created a web application to create heatmaps of allergen probability distribution on images to provide estimated allergen location.",image:a(74),firstLinkPath:a(75),firstLinkText:"See Poster",secondLinkPath:a(76),secondLinkText:"See Heatmaps"},{company:"Bloomberg School of Public Health",title:"Software Development Intern, May 2018 - August 2018",location:"Baltimore, Maryland",description:"Since this was my first software-related internship, this opportunity provided for me my first dive into software development in the real world. I initially developed data analysis and maintenance utilized by the epidemiology department; however, near the end of my internship, I built and demonstrated prototypes of progressive web apps that addressed the issues the department was facing regarding data reliability and accuracy. ",image:a(77),firstLinkPath:null,firstLinkText:null,secondLinkPath:null,secondLinkText:null},{company:"Mesquite High School",title:"Class of 2016",location:"Gilbert, Arizona",description:"At Mesquite, I was heavily involved with the AP program as well as the Speech and Debate and Tennis teams. This culminated in graduating as Salutatorian with multiple honors and awards, most notably the 2016 Arizona Interscholastic Asssociation Student of the Year award, a distinction given to one graduating senior in the entire state annually. ",image:a(78),firstLinkPath:null,firstLinkText:null,secondLinkPath:null,secondLinkText:null}];return i.a.createElement("div",{className:"portfolio"},i.a.createElement(S,null),i.a.createElement("header",null,i.a.createElement("div",{class:"landing-wrapper"},i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement("h2",{class:"text-center"},"Simon Zeng"),i.a.createElement("h2",{class:"text-center"},"Software Engineer"))))),i.a.createElement("body",null,i.a.createElement("section",{id:"about",class:"about-wrapper"},i.a.createElement("h1",{class:"title text-center"},"About"),i.a.createElement(p.a,{className:"about-wrapper"},i.a.createElement(f.a,null,i.a.createElement(h.a,{sm:3,lg:4},i.a.createElement("img",{class:"about-image",src:a(79),alt:"profile"})),i.a.createElement(h.a,{sm:9,lg:8},i.a.createElement(p.a,{className:"text-center about-text mx-auto"},i.a.createElement("p",{class:"text-left p-indent"},"Hi! I\u2019m currently a software engineer at Microsoft HQ in Redmond, Washington. My academic and career interests primarily revolve around Natural Language Processing, specifically in human language acquisition/computational language models and machine translation. Upon joining the industry, I\u2019ve also developed a particular affinity for cloud computing resources and tools."," "),i.a.createElement("p",{class:"text-left p-indent"},"Outside of my career, I enjoy cooking and baking, having worked as a sushi chef during high school. I am also fond of learning and studying new languages; in the past few years, I\u2019ve picked up some elementary French and Spanish while furthering my proficiency in Mandarin Chinese. Take a look at my interests further below if you want to learn more!"),i.a.createElement(g.a,{class:"button-resume",href:a(80),download:!0},"Download Resume")))))),i.a.createElement("section",{id:"timeline",class:"timeline-wrapper"},i.a.createElement("h1",{class:"title text-center"},"Timeline"),i.a.createElement(E,{timelineItems:t})),i.a.createElement("section",{id:"interests",class:"interests-wrapper"},i.a.createElement("h1",{class:"title text-center"},"Interests"),i.a.createElement(v,{interestLinks:e}))),i.a.createElement("footer",{id:"contact",class:"contact-wrapper"},i.a.createElement("h1",{class:"title text-center"},"Contact Me"),i.a.createElement("h4",{class:"text-center"},"I\u2019m always happy to connect! See any of the social media below or contact me at simonzeng9 [at] gmail [dot] com.")))},T=function(){return i.a.createElement("div",{className:"cooking"},i.a.createElement(b.a,{className:"border-nav",variant:"light",sticky:"top"},i.a.createElement(p.a,null,i.a.createElement(x.a.Link,{href:"./"},"Main"),i.a.createElement(x.a.Link,{href:"#skills"},"Skills"),i.a.createElement(x.a.Link,{href:"#projects"},"Projects"),i.a.createElement(x.a.Link,{href:"#contact"},"Contact"),i.a.createElement(L,null))))},I=function(){return i.a.createElement("div",{className:"side-projects"},i.a.createElement(b.a,{className:"border-nav",variant:"light",sticky:"top"},i.a.createElement(p.a,null,i.a.createElement(x.a.Link,{href:"./"},"Main"),i.a.createElement(x.a.Link,{href:"#skills"},"Skills"),i.a.createElement(x.a.Link,{href:"#projects"},"Projects"),i.a.createElement(x.a.Link,{href:"#contact"},"Contact"),i.a.createElement(L,null))))},M=function(){return i.a.createElement("div",null,i.a.createElement("h3",null," Recipe "))},P=function(){return i.a.createElement("div",null,i.a.createElement("h3",null," 404 Not Found"))},C=function(){return i.a.createElement("div",{className:"portfolio"},i.a.createElement("nav",{class:"navbar navbar-expand-lg text-uppercase fixed-top",id:"mainNav"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},i.a.createElement("ul",{class:"navbar-nav test"},i.a.createElement("li",{class:"nav-item mx-0 mx-lg-1"},i.a.createElement("a",{class:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#portfolio"},"Portfolio")),i.a.createElement("li",{class:"nav-item mx-0 mx-lg-1"},i.a.createElement("a",{class:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#about"},"About")),i.a.createElement("li",{class:"nav-item mx-0 mx-lg-1"},i.a.createElement("a",{class:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#contact"},"Contact")))))),i.a.createElement("header",{class:"masthead bg-primary text-white text-center"},i.a.createElement("div",{class:"container d-flex align-items-center flex-column"},i.a.createElement("h1",{class:"masthead-heading text-uppercase mb-0"},"Start Bootstrap"),i.a.createElement("div",{class:"divider-custom divider-light"},i.a.createElement("div",{class:"divider-custom-line"}),i.a.createElement("div",{class:"divider-custom-icon"},i.a.createElement("i",{class:"fas fa-star"})),i.a.createElement("div",{class:"divider-custom-line"})),i.a.createElement("p",{class:"masthead-subheading font-weight-light mb-0"},"Graphic Artist - Web Designer - Illustrator"),i.a.createElement(g.a,null," HI "))),i.a.createElement("section",{class:"page-section portfolio",id:"portfolio"},i.a.createElement("div",{class:"container"},i.a.createElement("h2",{class:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Portfolio"),i.a.createElement("div",{class:"divider-custom"},i.a.createElement("div",{class:"divider-custom-line"}),i.a.createElement("div",{class:"divider-custom-icon"},i.a.createElement("i",{class:"fas fa-star"})),i.a.createElement("div",{class:"divider-custom-line"})),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-md-6 col-lg-4 mb-5"},i.a.createElement("div",{class:"portfolio-item mx-auto","data-toggle":"modal","data-target":"#portfolioModal1"},i.a.createElement("div",{class:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},i.a.createElement("div",{class:"portfolio-item-caption-content text-center text-white"},i.a.createElement("i",{class:"fas fa-plus fa-3x"}))),i.a.createElement("img",{class:"img-fluid",src:a(37),alt:"canot find"}))),i.a.createElement("div",{class:"col-md-6 col-lg-4 mb-5"},i.a.createElement("div",{class:"portfolio-item mx-auto","data-toggle":"modal","data-target":"#portfolioModal2"},i.a.createElement("div",{class:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},i.a.createElement("div",{class:"portfolio-item-caption-content text-center text-white"},i.a.createElement("i",{class:"fas fa-plus fa-3x"}))),i.a.createElement("img",{class:"img-fluid",src:a(37),alt:""}))),i.a.createElement("div",{class:"col-md-6 col-lg-4 mb-5"},i.a.createElement("div",{class:"portfolio-item mx-auto","data-toggle":"modal","data-target":"#portfolioModal3"},i.a.createElement("div",{class:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},i.a.createElement("div",{class:"portfolio-item-caption-content text-center text-white"},i.a.createElement("i",{class:"fas fa-plus fa-3x"}))),i.a.createElement("img",{class:"img-fluid",src:a(37),alt:""})))))),i.a.createElement("section",{class:"page-section bg-primary text-white mb-0",id:"about"},i.a.createElement("div",{class:"container"},i.a.createElement("h2",{class:"page-section-heading text-center text-uppercase text-white"},"About"),i.a.createElement("div",{class:"divider-custom divider-light"},i.a.createElement("div",{class:"divider-custom-line"}),i.a.createElement("div",{class:"divider-custom-icon"},i.a.createElement("i",{class:"fas fa-star"})),i.a.createElement("div",{class:"divider-custom-line"})),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-lg-4 ml-auto"},i.a.createElement("p",{class:"lead"},"Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.")),i.a.createElement("div",{class:"col-lg-4 mr-auto"},i.a.createElement("p",{class:"lead"},"You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!"))))),i.a.createElement("section",{class:"page-section",id:"contact"},i.a.createElement("div",{class:"container"},i.a.createElement("h2",{class:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Contact Me"),i.a.createElement("div",{class:"divider-custom"},i.a.createElement("div",{class:"divider-custom-line"}),i.a.createElement("div",{class:"divider-custom-icon"},i.a.createElement("i",{class:"fas fa-star"})),i.a.createElement("div",{class:"divider-custom-line"})))),i.a.createElement("footer",{class:"footer text-center"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-lg-4 mb-5 mb-lg-0"},i.a.createElement("h4",{class:"text-uppercase mb-4"},"Location"),i.a.createElement("p",{class:"lead mb-0"},"2215 John Daniel Drive",i.a.createElement("br",null),"Clark, MO 65243")),i.a.createElement("div",{class:"col-lg-4 mb-5 mb-lg-0"},i.a.createElement("h4",{class:"text-uppercase mb-4"},"Around the Web"),i.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},i.a.createElement("i",{class:"fab fa-fw fa-facebook-f"})),i.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},i.a.createElement("i",{class:"fab fa-fw fa-twitter"})),i.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},i.a.createElement("i",{class:"fab fa-fw fa-linkedin-in"})),i.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},i.a.createElement("i",{class:"fab fa-fw fa-dribbble"}))),i.a.createElement("div",{class:"col-lg-4"},i.a.createElement("h4",{class:"text-uppercase mb-4"},"About Freelancer"),i.a.createElement("p",{class:"lead mb-0"},"Freelance is a free to use, MIT licensed Bootstrap theme created by ",i.a.createElement("a",{href:"http://startbootstrap.com"},"Start Bootstrap"),"."))))))},N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{basename:"wip-website"},i.a.createElement(u.d,null,i.a.createElement(u.b,{exact:!0,path:"/",component:j}),i.a.createElement(u.b,{exact:!0,path:"/cooking",component:T}),i.a.createElement(u.b,{exact:!0,path:"/coding",component:I}),i.a.createElement(u.b,{exact:!0,path:"/recipe",component:M}),i.a.createElement(u.b,{exact:!0,path:"/404",component:P}),i.a.createElement(u.b,{exact:!0,path:"/wip",component:C}),i.a.createElement(u.a,{to:"./404"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81),a(82),a(83),a(84);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.4d4b4921.chunk.js.map