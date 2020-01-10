export const state = () => ({
    portfolioItems: {
        AvoyaReviews: {
            path: '/projects/avoya-reviews/',
            thumbnailPath: '/avoya_reviews_thumb.png',
            images: ['/avoya_reviews_home.png', '/avoya_reviews_details.png'],
            title: 'Avoya Travel Reviews',
            description: '<p class="pb-4">This was a project I originally built in our legacy codebase using ColdFusion and JavaScript/Jquery. Our engineers compiled a table of customer reviews that were sent in through our membership system. My role was to design an interface in which a user could sort though the reviews based on any combination of Cruiseline and their corresponding ships.</p><p class="pb-4">A year later I had the opportunity to refactor these pages using Atomic Design and in the Nuxt framework. We also upgraded the page with the ability to sort/filter by star rating, date, and ship name.</p>',
            techUsed: ['Vuejs', 'Nuxt', 'Axios', 'JavaScript', 'API'],
            siteLink: ''
        },
        AvoyaDashboard: {
            path: '/projects/avoya-dashboard/',
            thumbnailPath: '/avoya_dashboard_thumb.png',
            images: ['/avoya_dashboard_top.png', '/avoya_dashboard_bot.png', '/avoya_dashboard_modal.png'],
            title: 'Avoya Membership',
            description: '<p class="pb-4">Agent Power, Ayoya\'s proprietary software, is a lead management and booking system that our network of Travel Agents use to manage their customers. The dashboard is our latest featured release. It is a snapshot of the most crucial data a travel agent needs to have at any given moment. Almost every component relies on dynamic data being returned to have the most up to date information. Agency owners also have the option to change the view to see their employee\'s performance and status.</p>',
            techUsed: ['Vuejs', 'Nuxt', 'Axios', 'JavaScript', 'API'],
            siteLink: ''
        },
        AvoyaMembership: {
            path: '/projects/avoya-membership/',
            thumbnailPath: '/avoya_membership_thumb.png',
            images: ['/avoya_membership_home.png', '/avoya_membership_favorites.png', '/avoya_membership_settings.png'],
            title: 'Avoya Membership',
            description: '<p class="pb-4">As my introductory project to Vue.js, this project was a terrific experience of how great a framework it is. The membership platform is actually a hybrid that uses coldfusion to handle the api end points in the parent pages, then utilizes the "Props" to pass the data to the vue components</p><p class="pb-4">The membership platform is a system in which users can store their personal information, save their favorite trips, and write reviews<p>',
            techUsed: ['Vuejs', 'JavaScript', 'jQuery', 'Ajax'],
            siteLink: ''
        },
        SilverDragon: {
            path: '/projects/silver-dragon/',
            thumbnailPath: '/silverDragon_thumb.jpg',
            images: ['/silverDragon_home.png', '/silverDragon_projects.png', '/silverDragon_profile.png',],
            title: 'SilverDragonSquadron.com',
            description: '<p class="pb-4">I am currently working with Steve Kim, a retired architect and pilot, to chronicle the construction of his own person aircraft as he builds it by hand. Steve needed a website that would capture his passion for aviation, but easily be updated as he completes each section of the plane. He also needed an outlet to send out announcements as the plane goes through inspection and eventually takes flight.</p><p class="pb-4">My role as Steve’s WordPress administrator is to deliver a site that brings his vision to life. I oversaw securing the domain name, hosting, and installation of WordPress and this theme. I used custom css to build what Steve had envisioned.</p><p>I created all vector images from scratch in using Adobe Illustrator including the dragon emblem and Falcon XP logo</p>',
            techUsed: ['WordPress', 'MailChimp', 'CSS', 'Photoshop', 'Illustrator'],
            siteLink: ''
        },
        StaffMyClients: {
            path: '/projects/staff-my-clients/',
            thumbnailPath: '/staff_my_clients_thumb.png',
            images: ['/staff-dashboard.png', '/staff-users.png', '/staff-department.png', '/staff-break.png', '/staff-overtime.png','/staff-overview.png', '/staff-rules.png'],
            title: 'Time Clock Software',
            description: '<p class="pb-4">One of my first large scale projects was developing the user interface for software that keeps track of time-clock data. The designs were mocked up by the design team and I was part of a team that brought the mock-ups to life. During this project I became familiar with the git flow process and how to properly work in an environment with multiple branches in which other developers routinely pushed code.</p>',
            techUsed: ['NPM', 'SASS', 'Gulp', 'BootStrap', 'jQuery', 'HTML', 'CSS'],
            siteLink: ''
        },
        Techsd: {
            path: '/projects/techsd/',
            thumbnailPath: '/techSD_thumb.jpg',
            images: ['/techSD_home.png', '/techSD_about.png', '/techSD_benefits.png',],
            title: 'techsandiego.org',
            description: '<p class="pb-4">I was hired as a web administrator for Tech San Diego because the growing company needed someone to take remedial site updates off their hands. I had been maintaining their site using the Joomla! until management tasked me with migrating the site to WordPress, as well as giving it a fresh new look. It was a great learning experience and gave me exposure to UX/UI.</p>',
            techUsed: ['WordPress', 'Joomla!', 'CSS', 'Photoshop', 'Illustrator'],
            siteLink: ''
        },
        Nixon: {
            path: '/projects/nixon/',
            thumbnailPath: '/nixon_thumb.png',
            images: ['/nixon_page.png', '/nixon_email.png'],
            title: 'Nixon',
            description: '<p class="pb-4">I maintained contract work with Nixon to assist in updating seasonal pages of their Ecommerce site, as well as, making email templates. Typical functions included taking a PSD File and implementing a HTML structure, CSS, linking images, and updating foreign languages.</p>',
            techUsed: ['HTML', 'CSS', 'DemandWare', 'Email', 'Photoshop'],
            siteLink: ''
        },
        EcommercePage: {
            path: '/projects/ecommerce-page/',
            thumbnailPath: '/ecommerce_thumb.jpg',
            images: ['/ecommerce_desktop.png', '/ecommerce_product.png', '/ecommerce_details.png'],
            title: 'eCommerce Page',
            description: '<p class="pb-4">I built this page to spec according to the psd files provided to me. I used the Materialize CSS framework for the grid structure and responsive behavior along with jQuery to achieve the desired functionality</p><p>Programmed functionality to note:</p><ul><li>Fully responsive behavior to match psd mockups</li><li>Auto-Complete State Finder in the search field</li><li>Filter the images by pricing using the dropdown</li><li>Clicking on "Learn More" reveals expanded info section</li><li>Hover animation with corresponding elements for the different grains in the expanded information section</li></ul>',
            techUsed: ['Materialize', 'JavaScript', 'HTML', 'CSS', 'jQuery'],
            siteLink: ''
        },
        ComingSoon: {
            path: '/projects/coming-soon/',
            thumbnailPath: '/coming_soon_thumb.jpg',
            images: ['/coming_soon_cover.png'],
            title: 'Coming Soon',
            description: '<p class="pb-4">A "teaser" poster for a highly anticipated book. This poster was posted throughout the author\'s various social media outlets.</p>',
            techUsed: ['Illustrator', 'PhotoShop'],
            siteLink: ''
        },
        SierraBotanicals: {
            path: '/projects/sierra-botanicals/',
            thumbnailPath: '/sierra_postcard_thumb.png',
            images: ['/sierra_postcard_front.png', '/sierra_postcard_back.png'],
            title: 'Sierra Botanicals',
            description: '<p class="pb-4">I created a simple postcard to display this company various product flavors</p>',
            techUsed: ['Illustrator', 'PhotoShop'],
            siteLink: ''
        },
        CathedralCatholic: {
            path: '/projects/cathedral-catholic/',
            thumbnailPath: '/cchs_thumb.png',
            images: ['/cchs_front.png', '/cchs_back.png', '/cchs_taste_logo.png'],
            title: 'Cathedral Catholic High School',
            description: '<p class="pb-4"></p>',
            techUsed: ['Illustrator', 'PhotoShop'],
            siteLink: ''
        },
        Logos: {
            path: '/projects/logos/',
            thumbnailPath: '/logos_thumb.png',
            images: ['/logos-oiling.png', '/logos-oiling-tote.png', '/logos-silverDragon.png', '/logos-silverDragon-alt.png', '/logos-ssf.png', '/logos-taste.png'],
            title: 'Logo Design',
            description: '<p class="pb-4"></p>',
            techUsed: ['Illustrator', 'PhotoShop'],
            siteLink: ''
        }
    }
});

export const getters = {
    projectName(state) {
        return function (urlParam) {
            return state.portfolioItems[urlParam];
        };
    }
};
