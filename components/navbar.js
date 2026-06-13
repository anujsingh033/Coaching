const navItems = [
  ["Home", "index.html"],
  ["About", "about.html"],
  ["Courses", "courses.html"],
  ["Faculty", "faculty.html"],
  ["Results", "results.html"],
  ["Gallery", "gallery.html"],
  ["Blog", "blog.html"],
  ["Admission", "admission.html"],
  ["Contact", "contact.html"],
  ["Portal", "portal.html"]
];

export function initNavbar() {
  const mount = document.querySelector("#site-navbar");
  if (!mount) return;

  const page = location.pathname.split("/").pop() || "index.html";
  const links = navItems.map(([label, href]) => {
    const active = page === href ? "active" : "";
    return `<a class="nav-link ${active}" href="${href}">${label}</a>`;
  }).join("");

  const mobileLinks = navItems.map(([label, href]) => {
    const active = page === href ? "text-blue-600 dark:text-sky-300" : "";
    return `<a class="block rounded-xl px-4 py-3 font-extrabold ${active}" href="${href}">${label}</a>`;
  }).join("");

  mount.innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav class="container-pad glass rounded-2xl px-4 py-3" aria-label="Primary">
        <div class="flex items-center justify-between gap-4">
          <a href="index.html" class="flex items-center gap-3" aria-label="Achievers Academy home">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-lg font-black text-white">A</span>
            <span>
              <span class="block text-base font-black leading-5 dark:text-slate-100">Achievers</span>
              <span class="block text-xs font-bold text-slate-500 dark:text-slate-400">Coaching Institute</span>
            </span>
          </a>
          <div class="hidden items-center gap-6 xl:flex">${links}</div>
          <div class="hidden items-center gap-2 md:flex">
            <div class="group relative">
              <button class="btn-secondary px-4" type="button" data-motion-button>
                Courses <i data-lucide="chevron-down" class="h-4 w-4"></i>
              </button>
              <div class="invisible absolute right-0 top-12 w-[42rem] opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div class="glass grid grid-cols-3 gap-3 rounded-2xl p-4">
                  ${["IIT-JEE", "NEET", "UPSC", "SSC", "Banking", "Foundation"].map((item) => `
                    <a href="courses.html" class="rounded-xl p-4 hover:bg-blue-50 dark:hover:bg-slate-800">
                      <span class="font-black dark:text-slate-100">${item}</span>
                      <span class="mt-1 block text-sm text-slate-500 dark:text-slate-400">Structured batches, tests, mentorship.</span>
                    </a>`).join("")}
                </div>
              </div>
            </div>
            <button class="icon-btn" type="button" data-dark-toggle aria-label="Toggle dark mode">
              <i data-lucide="moon" class="h-5 w-5"></i>
            </button>
            <button class="btn-primary px-5" type="button" data-open-callback data-motion-button>
              <i data-lucide="phone-call" class="h-4 w-4"></i> Callback
            </button>
          </div>
          <button class="icon-btn md:hidden" type="button" data-open-menu aria-label="Open menu">
            <i data-lucide="menu" class="h-5 w-5"></i>
          </button>
        </div>
      </nav>
    </header>
    <aside class="mobile-drawer fixed bottom-0 right-0 top-0 z-[70] w-[86vw] max-w-sm bg-white p-5 shadow-2xl dark:bg-slate-950 md:hidden" data-mobile-drawer>
      <div class="mb-6 flex items-center justify-between">
        <span class="text-lg font-black dark:text-slate-100">Menu</span>
        <button class="icon-btn" type="button" data-close-menu aria-label="Close menu"><i data-lucide="x" class="h-5 w-5"></i></button>
      </div>
      <div class="space-y-1">${mobileLinks}</div>
      <button class="btn-primary mt-6 w-full px-5" type="button" data-open-callback>Request Callback</button>
      <button class="btn-secondary mt-3 w-full px-5" type="button" data-dark-toggle>Toggle Dark Mode</button>
    </aside>
    <div class="modal-backdrop" data-callback-modal>
      <div class="premium-card w-full max-w-lg p-6" role="dialog" aria-modal="true" aria-label="Callback request">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-2xl font-black dark:text-slate-100">Get a Free Callback</h2>
          <button class="icon-btn" type="button" data-close-modal aria-label="Close callback form"><i data-lucide="x" class="h-5 w-5"></i></button>
        </div>
        <form class="space-y-3" data-lead-form>
          <input class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" name="name" placeholder="Student name" required>
          <input class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" name="phone" placeholder="Mobile number" pattern="[0-9]{10}" required>
          <select class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" name="course" required>
            <option value="">Select course</option>
            <option>IIT-JEE</option><option>NEET</option><option>UPSC</option><option>SSC</option><option>Banking</option>
          </select>
          <button class="btn-primary w-full px-5" type="submit">Submit Request</button>
          <p class="hidden rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700" data-form-success>Thanks. Our counsellor will call you soon.</p>
        </form>
      </div>
    </div>
  `;
}
