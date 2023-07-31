const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <header id="header">
    <link rel="stylesheet" href="/assets/css/main.css" />
    <div class="logo container">
      <div>
        <h1><a href="/index.html" id="logo">A blog</a></h1>
        <p>as another side project</p>
      </div>
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('header-module', Header);

// navigator

const navigatorTemplate = document.createElement('template');
navigatorTemplate.innerHTML = `

<link rel="stylesheet" href="/assets/css/main.css" />

    <ul>
    <li class="current"><a href="index.html">Home</a></li>
    <li>
        <a href="#">Blogs</a>
        <ul>
            <li><a href="blogs/pytrack/pytrack-start/pytrack-start.html">Pytrack Development Logs</a></li>
            <li><a href="blogs/webdev/create-blog/create-blog.html">How to create a blog like this</a></li>
            <li>
                <a href="blogs/gamedev/gamedev-start/gamedev-start.html">My game development diary</a>
            </li>
            <li><a href="blogs/art/art-start/art-start.html">Art and more</a></li>
        </ul>
    </li>
    </ul>

`;

class Navigator extends HTMLUListElement {
    constructor() {
      super();

      this.innerHTML = `

      <li class="current"><a href="index.html">Home</a></li>
						<li>
							<a href="#">Blogs</a>
							<ul>
								<li><a href="blogs/pytrack/pytrack-start/pytrack-start.html">Pytrack Development Logs</a></li>
								<li><a href="blogs/webdev/create-blog/create-blog.html">How to create a blog like this</a></li>
								<li>
									<a href="blogs/gamedev/gamedev-start/gamedev-start.html">My game development diary</a>
								</li>
								<li><a href="blogs/art/art-start/art-start.html">Art and more</a></li>
							</ul>
						</li>

      <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/jquery.dropotron.min.js"></script>
        <script src="/assets/js/jquery.scrolly.min.js"></script>
        <script src="/assets/js/browser.min.js"></script>
        <script src="/assets/js/breakpoints.min.js"></script>
        <script src="/assets/js/util.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/components.js"></script>
      `;
    }
  }

customElements.define('nav-module', Navigator, {extends: 'ul'});

// Featured
const featuredTemplate = document.createElement('template');
featuredTemplate.innerHTML = `
<link rel="stylesheet" href="/assets/css/main.css" />
<section class="box features">
    <h2 class="major"><span>Things I'm Working On Right Now</span></h2>
    <div>
        <div class="row">
            <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                    <section class="box feature">
                        <a href="/blogs/pytrack/pytrack-start/pytrack-start.html" class="image featured"><img src="/images/pic01.jpg" alt="" /></a>
                        <h3><a href="/blogs/pytrack/pytrack-start/pytrack-start.html">PyTrack</a></h3>
                        <p>
                            This is a desktop application I made to counter my procrastination. This is also the first application I made. Read the tales of my struggles as someone new to software development.
                        </p>
                    </section>

            </div>
            <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                    <section class="box feature">
                        <a href="/blogs/webdev/create-blog/create-blog.html" class="image featured"><img src="/images/pic02.jpg" alt="" /></a>
                        <h3><a href="/blogs/webdev/create-blog/create-blog.html">This Blog</a></h3>
                        <p>
                            This blog is made from a template I downloaded online. I will tell you how I made this so you can make your own blog with little to no ccs, html, and javascript knowledge!
                        </p>
                    </section>

            </div>
            <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                    <section class="box feature">
                        <a href="/blogs/gamedev/gamedev-start/gamedev-start.html" class="image featured"><img src="/images/pic03.jpg" alt="" /></a>
                        <h3><a href="/blogs/gamedev/gamedev-start/gamedev-start.html">My game development Journey</a></h3>
                        <p>
                            Here I show you my dive to the unity game engine. A casual diary or a rant outlet.
                        </p>
                    </section>

            </div>
            <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                    <section class="box feature">
                        <a href="/blogs/code-graphy/code-graphy-start/code-graphy-start.html" class="image featured"><img src="/blogs/code-graphy/planning-stage/code-graph.png" alt="" /></a>
                        <h3><a href="/blogs/code-graphy/code-graphy-start/code-graphy-start.html">CodeGraphy</a></h3>
                        <p>
                            CodeGraphy is another side project that converts a codebase to an interactive graph.
                        </p>
                    </section>

            </div>
            <div class="col-3 col-6-medium col-12-small">

                <!-- Feature -->
                    <section class="box feature">
                        <a href="/blogs/art/art-start/art-start.html" class="image featured"><img src="/images/pic04.jpg" alt="" /></a>
                        <h3><a href="/blogs/art/art-start/art-start.html">Art</a></h3>
                        <p>
                            As a big weeb, anime made me try to draw (well I'm not good at it). I'm not that good but I try to document what I draw, how I draw, and things I learned along the way.
                        </p>
                    </section>

            </div>
            <div class="col-12">
                <ul class="actions">
                    <li><a href="#contact" class="button scrolly">Contact Info</a></li>
                    <!-- <li><a href="#" class="button alt large"></a></li> -->
                </ul>
            </div>
        </div>
    </div>
</section>
`;

class Featured extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(featuredTemplate.content.cloneNode(true));
  }
}

customElements.define('featured-module', Featured);

// blog

const blogTemplate = document.createElement('template');
blogTemplate.innerHTML = `
<link rel="stylesheet" href="/assets/css/main.css" />
<section class="box blog">
<h2 class="major"><span>Featured Article</span></h2>
<div>
    <div class="row">
        <div class="col-9 col-12-medium">
            <div class="content">

                <!-- Featured Post -->
                    <article class="box post">
                        <header>
                            <h3><a href="/blogs/webdev/create-blog/create-blog.html">How to create your own blog!</a></h3>
                            <p>With little to no html, ccs, or javascript knowledge!</p>
                        </header>
                        <a href="/blogs/webdev/create-blog/create-blog.html" class="image featured"><img src="/images/pic02.jpg" alt="" /></a>
                        <p>
                            I've set upped this blog in less than 10 mins. No I wasn't joking. you can also do this by yourself
                            I'm gonna teach you how I did this blog so you can also do it by yourself.
                        </p>
                        <a href="/blogs/webdev/create-blog/create-blog.html" class="button">Continue Reading</a>
                    </article>

            </div>
        </div>
        <div class="col-3 col-12-medium">
            <div class="sidebar">

                <!-- Archives -->
                    <ul class="divided">
                        <li>
                            <article class="box post-summary">
                                <h3><a href="#">A Subheading</a></h3>
                                <ul class="meta">
                                    <li class="icon fa-clock">6 hours ago</li>
                                    <li class="icon fa-comments"><a href="#">34</a></li>
                                </ul>
                            </article>
                        </li>
                        <li>
                            <article class="box post-summary">
                                <h3><a href="#">Another Subheading</a></h3>
                                <ul class="meta">
                                    <li class="icon fa-clock">9 hours ago</li>
                                    <li class="icon fa-comments"><a href="#">27</a></li>
                                </ul>
                            </article>
                        </li>
                        <li>
                            <article class="box post-summary">
                                <h3><a href="#">And Another</a></h3>
                                <ul class="meta">
                                    <li class="icon fa-clock">Yesterday</li>
                                    <li class="icon fa-comments"><a href="#">184</a></li>
                                </ul>
                            </article>
                        </li>
                        <li>
                            <article class="box post-summary">
                                <h3><a href="#">And Another</a></h3>
                                <ul class="meta">
                                    <li class="icon fa-clock">2 days ago</li>
                                    <li class="icon fa-comments"><a href="#">286</a></li>
                                </ul>
                            </article>
                        </li>
                        <li>
                            <article class="box post-summary">
                                <h3><a href="#">And One More</a></h3>
                                <ul class="meta">
                                    <li class="icon fa-clock">3 days ago</li>
                                    <li class="icon fa-comments"><a href="#">8,086</a></li>
                                </ul>
                            </article>
                        </li>
                    </ul>
                    <a href="#" class="button alt">Archives</a>

            </div>
        </div>
    </div>
</div>
</section>
`;

class Blog extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(blogTemplate.content.cloneNode(true));
  }
}

customElements.define('blog-module', Blog);

// Footer

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<footer id="footer">
<link rel="stylesheet" href="/assets/css/main.css" />
    <div class="container">
        <div class="row gtr-200">
            <div class="col-12">

                <!-- About -->
                    <!-- <section>
                        <h2 class="major"><span>What's this about?</span></h2>
                        <p>
                            This is <strong>TXT</strong>, yet another free responsive site template designed by
                            <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a>. It's released under the
                            <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for
                            whatever you're working on (personal or commercial), just be sure to give us credit for the design.
                            That's basically it :)
                        </p>
                    </section> -->

            </div>
            <div class="col-12">

                <!-- Contact -->
                    <section id="contact">
                        <h2 class="major"><span>Get in touch</span></h2>
                        <ul class="contact">
                            <li><a class="icon brands fa-facebook-f" href="https://www.facebook.com/profile.php?id=100091577864023"><span class="label">Facebook</span></a></li>
                            <li><a class="icon brands fa-twitter" href="https://twitter.com/C0tton_Buds"><span class="label">Twitter</span></a></li>
                            <li><a class="icon brands fa-github" href="https://github.com/0CottonBuds"><span class="label">Github</span></a></li>
                            <li><a class="icon brands fa-linkedin-in" href="https://www.linkedin.com/in/emil-john-llanes-187214231/"><span class="label">LinkedIn</span></a></li>
                        </ul>
                    </section>

            </div>
        </div>

        <!-- Copyright -->
            <div id="copyright">
                <ul class="menu">
                    <li>&copy; All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>

    </div>
</footer>
<script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/jquery.dropotron.min.js"></script>
<script src="/assets/js/jquery.scrolly.min.js"></script>
<script src="/assets/js/browser.min.js"></script>
<script src="/assets/js/breakpoints.min.js"></script>
<script src="/assets/js/util.js"></script>
<script src="/assets/js/main.js"></script>
`;

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-module', Footer);
