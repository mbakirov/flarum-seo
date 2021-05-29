module.exports=function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=17)}([function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["utils/saveSettings"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["utils/Stream"]},function(e,t){e.exports=flarum.core.compat["common/Component"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/DashboardPage"]},function(e,t){e.exports=flarum.core.compat["components/DashboardWidget"]},function(e,t){e.exports=flarum.core.compat["components/ExtensionPage"]},function(e,t){e.exports=flarum.core.compat["components/UploadImageButton"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/Dropdown"]},function(e,t){e.exports=flarum.core.compat["components/Link"]},function(e,t,s){"use strict";s.r(t);var n=s(8),o=s.n(n),a=s(9),i=s(10),r=s.n(i);function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,l(e,t)}var c=s(11),d=s.n(c),h=s(0),p=s.n(h),f=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.needsReview=!1,void 0===app.data.settings.seo_review_settings&&(this.needsReview=!0),!this.needsReview&&Math.floor(Date.now()/1e3)>app.data.settings.seo_review_settings&&(this.needsReview=!0)},s.className=function(){return"SeoWidget "+(this.needsReview?"needs-review":"")},s.content=function(){return m("div",null,m("i",{className:"fas fa-check seo-check-icon"})," It's time to review your SEO settings!",p.a.component({className:"",icon:"far fa-thumbs-up",onclick:function(){return m.route.set("extension/v17development-seo")}},"Do the health-check!"))},t}(d.a),g=s(12),v=s.n(g),w=s(6),b=s.n(w),y=s(2),x=s.n(y),_=s(1),k=s.n(_),S=s(7),N=s.n(S),F=s(13),D=s.n(F),T=s(4),B=s.n(T),L=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.value=void 0!==app.data.settings.seo_post_crawler&&app.data.settings.seo_post_crawler,this.startValue=this.value,this.closeText="Close",this.loading=!1,void 0===app.data.settings.seo_reviewed_post_crawler&&this.saveReviewedPostCrawler()},s.title=function(){return"Post crawl settings"},s.content=function(){var e=this;return m("div",null,m("div",{className:"Modal-body"},m("div",{className:"Form"},m("b",null,"Read this dialog carefully.")," This function will only be executed on a page refresh on a discussion. You can always change this option later.",m("div",{style:"padding: 10px 0;"},m("b",{style:"display: block; padding-bottom: 10px;"},m("span",{style:"display: inline-block; width: 25px;"},m("i",{className:"fas fa-check"})),"Only index the main post (default)"),"Search engine will only show the main post in the search results. It won't affect loading speed when you navigate to it via forum links."),m("div",{style:"padding: 10px 0;"},m("b",{style:"display: block; padding-bottom: 10px;"},m("span",{style:"display: inline-block; width: 25px;"},m("i",{className:"fas fa-check-double"}))," Index all posts in a discussion (setting enabled)"),"Search engines will understand the discussions and are even able to show some relevant posts underneath the search results. When you have the extension '",m("a",{href:"https://discuss.flarum.org/d/21894-friendsofflarum-best-answer",target:"_blank"},"best answer"),"' installed and enabled on your forum, it will mark the discussion as 'answered' on the search results and redirect the user to that specific post. ",m("b",null,"However, depending on your server settings, this can be heavier"),". It may cost some performance, so it depends on how fast your server is to enable this feature."))),m("div",{style:"padding: 25px 30px; text-align: center;"},m("b",{style:"display: block; padding-bottom: 10px;"},"Do you want to enable this feature?"),m("div",{style:"display: inline-block;"},N.a.component({state:"1"==this.value,onchange:function(t){return e.change(t)}},"Crawl all posts (it's slower on page refresh, but search results will be better)"))),m("div",{style:"padding: 25px 30px; text-align: center;"},this.closeDialogButton()))},s.change=function(e){this.value=e,this.closeText=this.value!==this.startValue?"Save changes":"Close"},s.closeDialogButton=function(){return m(p.a,{type:"submit",className:"Button Button--primary",loading:this.loading},this.closeText)},s.onsubmit=function(e){if(this.value!==this.startValue){this.loading=!0;var t={};t.seo_post_crawler=this.value,k()(t).then(this.onsaved.bind(this))}else this.hide()},s.saveReviewedPostCrawler=function(){var e=this;this.loading=!0;var t={seo_reviewed_post_crawler:!0};k()(t).then((function(){e.loading=!1,m.redraw()}))},s.onsaved=function(){this.hide()},t}(B.a),O=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.value=void 0===app.data.settings.seo_robots_text?"":app.data.settings.seo_robots_text,this.startValue=this.value,this.closeText="Close",this.loading=!1},s.title=function(){return"Custom robots.txt"},s.content=function(){var e=this;return m("div",null,m("div",{className:"Modal-body"},m("textarea",{className:"FormControl",value:this.value,placeholder:"Add text to the robots.txt",rows:15,oninput:function(t){e.change(t.target.value)}})),m("div",{style:"padding: 25px 30px; text-align: center;"},this.closeDialogButton()))},s.change=function(e){this.value=e,this.closeText=this.value!==this.startValue?"Save changes":"Close"},s.closeDialogButton=function(){return m(p.a,{type:"submit",className:"Button Button--primary",loading:this.loading},this.closeText)},s.onsubmit=function(e){if(this.value!==this.startValue){this.loading=!0;var t={};t.seo_robots_text=this.value,k()(t).then(this.onsaved.bind(this))}else this.hide()},s.onsaved=function(){this.hide()},t}(B.a);function E(e,t){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(s)return(s=s.call(e)).next.bind(s);if(Array.isArray(e)||(s=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function I(e){if(""==e)return!0;for(var t,s=!0,n=E(e.split(","));!(t=n()).done;){if(t.value.split(" ").length>4){s=!1;break}}return s}var P=s(5),A=s.n(P),Y=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.domainDoFollowList=[],this.baseUrl=this.getDomainFromBase(),this.domainDoFollowList=void 0===app.data.settings.seo_dofollow_domains?A()([]):A()(JSON.parse(app.data.settings.seo_dofollow_domains)),this.startValue=this.domainDoFollowList,this.newDomain=A()(""),this.hasChanges=!1,this.loading=!1},s.title=function(){return"Do-follow list"},s.getDomainFromBase=function(){var e=new URL(app.forum.data.attributes.baseUrl).hostname.split(".");return e.slice(Math.max(e.length-2,0)).join(".")},s.content=function(){var e=this;return m("div",null,m("div",{className:"Modal-body"},m("p",null,"Enter the ",m("b",null,"hostnames")," of the domains you want to add to the do-follow list."),m("p",null,"The domain you use for your Flarum instance is added to the list by default."),m("p",{style:{marginBottom:"15px"}},m("a",{href:"https://community.v17.dev/knowledgebase/36",target:"_blank"},"Learn more")," about the do-follow list."),m("div",{className:"FlarumSEO-DoFollowList"},m("input",{type:"text",value:this.baseUrl,readonly:!0,className:"FormControl"}),m(p.a,{className:"Button",icon:"fas fa-times",disabled:!0})),this.domainDoFollowList().map((function(t,s){return m("div",{className:"FlarumSEO-DoFollowList"},m("input",{type:"text",value:t,onkeyup:function(t){return e.updateDomain(s,t.target.value)},className:"FormControl"}),m(p.a,{className:"Button",icon:"fas fa-times",onclick:function(){return e.removeDomain(s)}}))})),m("div",{className:"FlarumSEO-DoFollowList"},m("input",{type:"text",bidi:this.newDomain,placeholder:"Allow a domain",onkeydown:function(t){13===t.keyCode&&""!==e.newDomain()&&(t.preventDefault(),e.addDomain())},className:"FormControl"}),m(p.a,{className:"Button "+(""!==this.newDomain()?"Button--primary":""),icon:"fas fa-plus",onclick:this.addDomain.bind(this)}))),m("div",{style:"padding: 25px 30px; text-align: center;"},m(p.a,{type:"submit",className:"Button Button--primary",loading:this.loading},this.hasChanges?"Save changes":"Close")))},s.addDomain=function(){if(this.domainDoFollowList().indexOf(this.newDomain())>=0)return alert("This domain is already present in your do-follow list."),void this.newDomain("");var e=[].concat(this.domainDoFollowList());e.push(this.newDomain()),this.domainDoFollowList(e),this.newDomain(""),this.hasChanges=!0},s.removeDomain=function(e){var t=[].concat(this.domainDoFollowList());t.splice(e,1),this.domainDoFollowList(t),this.hasChanges=!0},s.updateDomain=function(e,t){var s=[].concat(this.domainDoFollowList());s[e]=t,this.domainDoFollowList(s),this.hasChanges=!0},s.onsubmit=function(e){if(this.hasChanges){this.loading=!0;var t={};t.seo_dofollow_domains=JSON.stringify(this.domainDoFollowList().filter((function(e){return""!==e}))),k()(t).then(this.onsaved.bind(this))}else this.hide()},s.onsaved=function(){this.hide()},t}(B.a),U=s(14),W=s.n(U),M=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){var s=this;e.prototype.oninit.call(this,t),this.saving=!1,this.fields=["forum_title","forum_description","forum_keywords","seo_allow_all_bots","seo_twitter_card_size"],this.values={};var n=app.data.settings;this.fields.forEach((function(e){return s.values[e]=A()(n[e]||"")})),this.allowBotsValue="0"!==n.seo_allow_all_bots,app.forum.data.attributes.seo_social_media_imageUrl=app.forum.attribute("baseUrl")+"/assets/"+app.data.settings.seo_social_media_image_path,this.showField="all",void 0!==m.route.param("setting")&&(this.showField=m.route.param("setting"))},s.view=function(){var e=this;return m("div",null,this.infoText(),m("form",{onsubmit:this.onsubmit.bind(this),className:"BasicsPage"},x.a.component({label:app.translator.trans("core.admin.basics.forum_description_heading"),className:"all"!==this.showField&&"description"!==this.showField?"hidden":""},[m("div",{className:"helpText"},app.translator.trans("core.admin.basics.forum_description_text")),m("textarea",{className:"FormControl",bidi:this.values.forum_description}),"description"===this.showField&&p.a.component({type:"submit",className:"Button Button--primary",loading:this.saving,disabled:!this.changed()},app.translator.trans("core.admin.settings.submit_button"))]),x.a.component({label:"Forum keywords",className:"all"!==this.showField&&"keywords"!==this.showField?"hidden":""},[m("div",{className:"helpText"},"Enter one or more keywords that describes your forum."),m("textarea",{className:"FormControl",bidi:this.values.forum_keywords,placeholder:"Add a few keywords"}),m("div",{className:"helpText",style:{color:0==I(this.values.forum_keywords())?"red":null}},m("b",null,"Note: Separate keywords with a comma.")," Example: ",m("i",null,"flarum, web development, forum, apples, security")),"keywords"===this.showField&&p.a.component({type:"submit",className:"Button Button--primary",loading:this.saving,disabled:!this.changed()},app.translator.trans("core.admin.settings.submit_button"))]),x.a.component({label:"Twitter card size",className:"all"!==this.showField?"hidden":""},[m("div",{className:"helpText"},"When your forum is shared on Twitter, it will have an image (if a social media image has been set up). This can be a big card with a big image, or a small card (summary) with a smaller image."),W.a.component({options:{large:"Large card (large image)",summary:"Summary card (smaller image)"},value:this.values.seo_twitter_card_size()||"large",onchange:function(t){e.values.seo_twitter_card_size(t),e.hasChanges=!0}}),p.a.component({type:"submit",className:"Button Button--primary",loading:this.saving,disabled:!this.changed()},app.translator.trans("core.admin.settings.submit_button"))]),x.a.component({label:"Social media image",className:"social-media-uploader "+("all"!==this.showField&&"social-media"!==this.showField?"hidden":"")},[m("div",{className:"helpText"},"Expecting a square image. Recommended size is 1200x1200 pixels. Otherwise use a landscape image, recommended size is 1200x630.",m("br",null),m("br",null),"This image will be used by Social Media when a user shares a page on your website (Facebook, Twitter, Reddit)."),D.a.component({name:"seo_social_media_image"})]),x.a.component({label:"Discussion post crawl settings",className:"all"!==this.showField&&"discussion-post"!==this.showField?"hidden":""},[m("div",{className:"helpText"},"This is an important setting about crawling your discussion posts in search results."),p.a.component({className:"Button",onclick:function(){return app.modal.show(L)}},"Setup post crawl settings")]),x.a.component({label:"No-follow links",className:"all"!==this.showField?"hidden":""},[m("div",{className:"helpText"},"All links to external domains will receive a '",m("i",null,"nofollow"),"' attribute by default. This will make sure people do not spam your forum with links to other domains in order to get more referrals."),m("div",{className:"helpText"},"With this setting you are able to add domains to the 'do-follow' list. For example, you can add ",m("i",null,"flarum.org")," to make sure links to this website do not receive a 'nofollow' attribute. ",m("a",{href:"https://community.v17.dev/knowledgebase/36",target:"_blank"},"Learn more"),"."),m("div",{style:"height: 5px;"}),m("div",null,p.a.component({className:"Button",loading:this.saving,onclick:function(){return app.modal.show(Y)}},"Open domain do-follow list"))]),x.a.component({label:"Open external links in new tab",className:"all"!==this.showField?"hidden":""},[m("div",{className:"helpText"},"This extension will also make sure that external links (to other domains) open in a new tab. Currently it is not possible to disable this setting.")]),x.a.component({label:"Edit robots.txt",className:"all"!==this.showField&&"robots"!==this.showField?"hidden":""},[m("div",{className:"helpText"},"You can edit your robot.txt here. Please note, writing nonsense could result that crawlers won't visit your site.",m("br",null),m("br",null),"When you've ",m("a",{href:"https://discuss.flarum.org/d/14941-fof-sitemap",target:"_blank"},"FriendsOfFlarum Sitemap")," installed and enabled, it will be automatically added to your robots.txt"),m("div",{style:"height: 5px;"}),N.a.component({state:this.allowBotsValue,onchange:function(t){return e.saveAllowBots(t)}},"Allow all bots & crawl full site directory"),m("div",{style:"height: 5px;"}),m("div",null,p.a.component({className:"Button",loading:this.saving,onclick:function(){return app.modal.show(O)}},"Edit robots.txt content")," ",m("a",{href:app.forum.attribute("baseUrl")+"/robots.txt",target:"_blank",className:"robots-link"},"Open robots.txt ",m("i",{className:"fas fa-external-link-alt"})))]),x.a.component({label:"Updated this setting?",className:"all"===this.showField?"hidden":""},[m("div",{className:"helpText"},"When you think you're ready, click the button below to re-check the status of this setting."),p.a.component({className:"Button",icon:"fas fa-sync",loading:this.saving,onclick:function(){return m.route.set(app.route("extension",{id:"v17development-seo"}))}},"Back to overview and re-check")])))},s.infoText=function(){if("all"===this.showField)return m("div",null,m("p",null,"This page contains some other settings from around the admin area. However, it's good to have a good overview about these settings. Do not forget to do the SEO check."),m("p",null,"Check all your settings when you first setup this extensions. Maintain them to get the best search results."))},s.changed=function(){var e=this;return this.fields.some((function(t){return e.values[t]()!==app.data.settings[t]}))},s.onsubmit=function(e){var t=this;if(e.preventDefault(),!this.saving){this.saving=!0,app.alerts.dismiss(this.successAlert);var s={};this.fields.forEach((function(e){return s[e]=t.values[e]()})),""===s.seo_twitter_card_size&&(s.seo_twitter_card_size="large"),k()(s).then((function(){return app.alerts.show({type:"success"},app.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){t.saving=!1,m.redraw()}))}},s.saveAllowBots=function(e){var t=this;if(!this.saving){this.saving=!0,this.allowBotsValue=e;var s={};s.seo_allow_all_bots=e,k()(s).then((function(){return app.alerts.show({type:"success"},app.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){t.saving=!1,m.redraw()}))}},s.saveSingleSetting=function(e,t){var s=this;if(!this.saving){this.saving=!0;var n={};n[e]=t,k()(n).then((function(){return app.alerts.show({type:"success"},app.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){s.saving=!1,m.redraw()}))}},t}(b.a),R=s(3),j=s.n(R),V=s(15),z=s.n(V),G=(b.a,function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.settings=app.data.settings,this.saving=!1},s.view=function(){return m("div",null,m("p",{className:"seo-intro"},"A quick SEO-health-check overview. If you have questions, ask your question the official ",m("a",{href:"https://discuss.flarum.org/d/18316-flarum-seo",target:"_blank"},"Flarum forums ",m("i",{className:"fas fa-external-link-alt"})),". When you have issues, ",m("a",{href:"https://github.com/v17development/flarum-seo/issues",target:"_blank"},"create a new issue ",m("i",{className:"fas fa-external-link-alt"})),"."),m("p",{className:"seo-intro"},"Are you a developer with some free time left? Contribute to the project ",m("a",{href:"https://github.com/v17development/flarum-seo",target:"_blank"},"on GitHub ",m("i",{className:"fas fa-external-link-alt"})),". Have you have built a Flarum Extension and you'd like to use the SEO tools from this extension? Please ",m("a",{href:"https://community.v17.dev/knowledgebase/22",target:"_blank"},"read the documentation ",m("i",{className:"fas fa-external-link-alt"})),"."),m("p",{className:"seo-intro"},"For optimal search engine results, make sure all checks are green."),m("table",{className:"seo-check-table"},m("thead",null,m("tr",null,m("td",null,"Technique"),m("td",{width:"150"},"Status"))),m("tbody",null,this.forumDescription(),this.forumKeywords(),this.siteUsesSSL(),this.discussionPostSet(),this.socialMediaImage(),this.hasSitemap(),this.registeredSearchEngines(),this.robotsTxt(),this.tagsAvailable(),this.reviewAgain())))},s.forumDescription=function(){var e=void 0!==this.settings.forum_description&&""!==this.settings.forum_description||"must",t="You did not set up a forum description yet!";return!0===e&&this.settings.forum_description.length<=20&&(e=!1,t="Your forum description is lower then 20 characters. Please expand it for better search results."),!0===e&&this.settings.forum_description.indexOf("This is beta software")>=0&&(e="must",t="You did not change the default forum description after installation!"),m("tr",null,m("td",null,"Your forum has a description",this.notPassedError(e,t,"Update description",this.getSettingUrl("description"))),this.passed(e,"description"))},s.forumKeywords=function(){var e=void 0!==this.settings.forum_keywords&&""!==this.settings.forum_keywords;return m("tr",null,m("td",null,"Your forum has keywords set up",this.notPassedError(e,"You did not set up a forum keywords yet!","Update keywords",this.getSettingUrl("keywords"))),this.passed(e,"keywords"))},s.siteUsesSSL=function(){var e=app.forum.attribute("baseUrl").indexOf("https://")>=0||"must";return m("tr",null,m("td",null,"Your site has a secure connection available (SSL/TLS)",this.notPassedError(e,"Your forum does not force a SSL/TLS connection (a secure connection to your website). Most search engines won't index your website or lower your ranking if you have no secure connection available.","How to set up SSL",app.route("extension",{id:"v17development-seo",page:"ssl"}))),this.passed(e))},s.discussionPostSet=function(){var e=void 0!==this.settings.seo_reviewed_post_crawler;return m("tr",null,m("td",null,"Review discussion post crawl settings",this.notPassedError(e,"You will need to review this setting to pass.","Review post settings",this.getSettingUrl("discussion-post"))),this.passed(e))},s.socialMediaImage=function(){var e=!0;return void 0!==this.settings.seo_social_media_image_path&&null!==this.settings.seo_social_media_image_path||(e=!1),m("tr",null,m("td",null,"Set Up a social media image",this.notPassedError(e,"You did not set a social media image for your forum. It is recommended to set one. Your favicon will now be used as preview on social media.","Update image",this.getSettingUrl("social-media"))),this.passed(e))},s.hasSitemap=function(){var e=!0;return-1===app.data.settings.extensions_enabled.indexOf("flagrow-sitemap")&&-1===app.data.settings.extensions_enabled.indexOf("fof-sitemap")&&(e=!1),m("tr",null,m("td",null,"Your forum has a sitemap available",this.notPassedError(e,"It is highly recommended to install the FriendsOfFlarum sitemap extension!","Read more about adding a sitemap",app.route("extension",{id:"v17development-seo",page:"sitemap"}))),this.passed(e))},s.robotsTxt=function(){return m("tr",null,m("td",null,"Your forum has a ",m("b",null,"robots.txt")," available. ",m("a",{href:app.forum.attribute("baseUrl")+"/robots.txt",target:"_blank",className:"robots-link"},"Open robots.txt ",m("i",{className:"fas fa-external-link-alt"}))),this.passed(!0))},s.tagsAvailable=function(){return m("tr",null,m("td",null,"Your forum has ",m("b",null,"meta tags")," available (generated by this plugin)"),this.passed(!0))},s.registeredSearchEngines=function(){var e=void 0!==this.settings.seo_reviewed_search_engines;return m("tr",null,m("td",null,"Register your forum to search engines",this.notPassedError(e,"You will need to review this to pass.","More information",app.route("extension",{id:"v17development-seo",page:"search-engines"}))),this.passed(e))},s.reviewAgain=function(){var e=this,t=!0,s=new Date;return void 0===app.data.settings.seo_review_settings?t=!1:s=new Date(1e3*app.data.settings.seo_review_settings),t&&Math.floor(Date.now()/1e3)>app.data.settings.seo_review_settings&&(t=!1),m("tr",null,m("td",null,"Review your SEO settings every two months. Next review needed on ",m("b",null,s.toDateString()),this.notPassedError(t,"It is time to re-review your SEO settings.","Ok! I reviewed them!",(function(){var t=new Date,s=Math.floor(new Date(t.getFullYear(),t.getMonth()+2,1)/1e3);e.saveSingleSetting("seo_review_settings",s)}))),this.passed(t))},s.getSettingUrl=function(e){return void 0===e&&(e=""),""===e?app.route("extension",{id:"v17development-seo"}):app.route("extension",{id:"v17development-seo",page:"settings",setting:e})},s.passed=function(e){return"must"===e?m("td",{className:"row-must"},m("i",{class:"fas fa-exclamation-circle"})," Warning!"):e?m("td",{className:"row-passed"},m("i",{class:"fas fa-check"})," All set!"):m("td",{className:"row-warning"},m("i",{class:"fas fa-exclamation-circle"})," Warning!")},s.notPassedError=function(e,t,s,n){if(void 0===s&&(s="Update setting"),void 0===n&&(n=app.route("seoSettings")),!0!==e)return m("div",{className:"row-not-passed-error"},t,m("div",{className:"button-container"},p.a.component({className:"Button",onclick:function(){"string"==typeof n?m.route.set(n):n()}},s)))},s.saveSingleSetting=function(e,t){var s=this;if(!this.saving){this.saving=!0;var n={};n[e]=t,k()(n).then((function(){app.alerts.show({type:"success"},app.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){s.saving=!1,m.redraw()}))}},t}(j.a)),q=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.oninit=function(t){e.prototype.oninit.call(this,t),this.saving=!1,this.hasConfirmed="1"===app.data.settings.seo_reviewed_search_engines},s.view=function(){var e=this;return m("div",null,m("h2",null,"Submit your website to Search Engines"),m("p",null,"It is good practice to let Search Engines know your site is exists. This page will guide you in doing this succesfully."),m("p",null,"It is recommended to have a sitemap ready before completing this guide. If you don't have a sitemap yet, ",m("a",{href:"#/seo/sitemap"},"click here to read more about them"),"."),m("div",null,m("h4",null,"Add your website to the Google search results"),m("p",null,"If you want to add your website to the Google search results, visit the ",m("a",{href:"https://search.google.com/search-console",target:"_blank"},"Google Search Console ",m("i",{className:"fas fa-external-link-alt"})),". You'll need to add your website and verify that you're the owner of the associated domain name."),m("p",null,"When you enter your domain you need to answer the following question for yourself: Do you want to use the 'www' sub-domain in the search results? You can ",m("strong",null,"not")," change this later. Registering your domain in the Google Search Console multiple times won't result in a better ranking."),m("p",null,"When you completed the registration in the Google Search Console, visit the ",m("b",null,"Sitemaps")," page. Pass your ",m("b",null,"sitemap.xml")," to Google. Make sure that Google can crawl your sitemap and will keep doing this.")),m("div",null,m("h4",null,"Add your website to the Bing search results"),m("p",null,"If you want to add your website to the Bing search results, visit the ",m("a",{href:"https://www.bing.com/toolbox/webmaster",target:"_blank"},"Bing Webmaster Tools ",m("i",{className:"fas fa-external-link-alt"}))," and complete the given steps. Not all fields are required."),m("p",null,"Don't forget to configure your sitemap URL. After you verified your website you're all set and Bing will now index your website.")),m("div",null,m("h4",null,"Add your website to the Yandex search results"),m("p",null,"If you want to add your website to the Yandex search results, visit the ",m("a",{href:"https://webmaster.yandex.com",target:"_blank"},"Yandex.Webmaster ",m("i",{className:"fas fa-external-link-alt"}))," and follow the given steps."),m("p",null,"Don't forget to configure the sitemap in the Yandex.Webmaster.")),m("div",null,m("h4",null,"Add your website to the Yahoo search results"),m("p",null,"If you want to add your website to the Yahoo search results, finish your Bing search results registration. Yahoo will use that data.")),m("div",{className:"clear"}),p.a.component({className:"Button pull-right "+(this.hasConfirmed?"hidden":""),onclick:function(){return e.confirm()},icon:"fas fa-check",loading:this.saving},"I have read this"))},s.confirm=function(){this.saveSingleSetting("seo_reviewed_search_engines",!0)},s.saveSingleSetting=function(e,t){var s=this;if(!this.saving){this.saving=!0;var n={};n[e]=t,k()(n).then((function(){s.hasConfirmed=!0,app.alerts.show({type:"success"},app.translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){s.saving=!1,m.redraw()}))}},t}(j.a),H=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.view=function(){return m("div",null,m("h2",null,"Why do I need an secure connection?"),m("p",null,"Safety and privacy awareness on the web is on the rise. ",m("b",null,"Almost every")," developer/website owner want their website safe to use for their visitors so they won't need to be afraid that their data will be compromised by hackers or website-impersonators."),m("h4",null,"Search engines ",m("i",{className:"fas fa-heart"})," secure connections"),m("p",null,"When you do not have a secure connection to your website, search engines will rank your site much lower then other sites, or even won't index it."),m("p",null,"When you have SSL available, your website will get an higher rank and will be indexed."),m("h4",null,"What is SSL or TLS?"),m("p",null,"The most people know ",m("b",null,"https")," that's used for secure connections as SSL: ",m("i",null,"Secure Sockets Layer"),". Officially it's called TLS: ",m("i",null,"Transport Layer Security"),". This method is used to create a secure connection to your webserver what will prevent attackers or other webservers to impersonate your website and keep your visitors safe. The SSL connection will be broken if that happens and the visitors browsers will warning the user that's it's not trusted."),m("h4",null,"How to add SSL to your website?"),m("p",null,"For people who are using a webhosting, the most common way is to enter the webhosting panel, go to the hosting-settings of your website and click SSL. You can follow the steps to add SSL to your website. The most webhosting companies nowadays are supporting the popular certificate issuer ",m("a",{href:"https://letsencrypt.org/",target:"_blank"}," Let's Encrypt ",m("i",{className:"fas fa-external-link-alt"})),"."),m("h4",null,"Okay, I added SSL!"),m("p",null,"Great! Now, change your ",m("b",null,"config.php")," and change the ",m("b",null,"'url'")," to ",m("b",null,"https"),"!"),m("h4",null,"What if I do not want to add SSL?"),m("p",null,"In that case, you can uninstall this extension as search engines ",m("b",null,"won't index your forum")," or rank them far below other sites due safety reasons."))},t}(j.a),J=(s(16),function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.view=function(){return m("div",null,m("h2",null,"Why should you use a sitemap?"),m("p",null,"A sitemap is a XML file with a list of all the available pages on your website. It will be used by crawlers and search engines to find pages on your website."),m("p",null,"The sitemap file is automatically generated and does not need any maintenance."),m("h4",null,"What extension should I install?"),m("p",null,"At the moment, ",m("a",{href:"https://discuss.flarum.org/d/14941-fof-sitemap",target:"_blank"},"FriendsOfFlarum Sitemap ",m("i",{className:"fas fa-external-link-alt"}))," is the best extension to install for Flarum. We advice you to install and activate this extension."),m("p",null,"This extension will make sure crawlers will find your forum ",m("b",null,"discussions"),", ",m("b",null,"tags")," (when extension is enabled) and ",m("b",null,"Pages")," extension (when extension is installed and enabled). It will automatically make an sitemap.xml available."),m("h4",null,"I just installed the extension"),m("p",null,"In that case, activate it by clicking the extension in the sidebar at the left . Then this warning will disappear."))},t}(j.a)),K=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var s=t.prototype;return s.content=function(){var e=m.route.param().page||"health";return m("div",{className:"ExtensionPage-settings FlarumSEO"},m("div",{className:"seo-menu"},m("div",{className:"container"},this.menuButtons(e))),m("div",{className:"container FlarumSeoPage-container"},this.pageContent(e)))},s.menuButtons=function(e){return[p.a.component({className:"Button "+("health"===e?"item-selected":""),onclick:function(){return m.route.set(app.route("extension",{id:"v17development-seo"}))},icon:"fas fa-heartbeat"},"Health check"),p.a.component({className:"Button "+("settings"===e?"item-selected":""),onclick:function(){return m.route.set(app.route("extension",{id:"v17development-seo",page:"settings"}))},icon:"fas fa-cogs"},"SEO settings"),p.a.component({className:"Button "+("sitemap"===e?"item-selected":""),onclick:function(){return m.route.set(app.route("extension",{id:"v17development-seo",page:"sitemap"}))},icon:"fas fa-sitemap"},"Sitemap information"),p.a.component({className:"Button "+("search-engines"===e?"item-selected":""),onclick:function(){return m.route.set(app.route("extension",{id:"v17development-seo",page:"search-engines"}))},icon:"fas fa-search"},"Search engine information"),p.a.component({className:"Button "+("ssl"===e?"item-selected":""),onclick:function(){return m.route.set(app.route("extension",{id:"v17development-seo",page:"ssl"}))},icon:"fas fa-shield-alt"},"Set up SSL")]},s.pageContent=function(e){return"search-engines"===e?m(q,null):"settings"===e?m(M,null):"ssl"===e?m(H,null):"sitemap"===e?m(J,null):m(G,null)},t}(v.a);o.a.initializers.add("v17development-flarum-seo",(function(){o.a.extensionData.for("v17development-seo").registerPage(K),Object(a.extend)(r.a.prototype,"availableWidgets",(function(e){e.add("seo-widget",m(f,null),500)}))}))}]);
//# sourceMappingURL=admin.js.map