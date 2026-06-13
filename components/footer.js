export function initFooter() {
  const mount = document.querySelector("#site-footer");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="border-t border-slate-200 bg-white/80 py-14 dark:border-slate-800 dark:bg-slate-950/72">
      <div class="container-pad grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
        <div>
          <div class="mb-4 flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-lg font-black text-white">A</span>
            <div>
              <p class="font-black dark:text-slate-100">Achievers Coaching Institute</p>
              <p class="text-sm text-slate-500 dark:text-slate-400">Premium preparation for competitive exams.</p>
            </div>
          </div>
          <p class="max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">Mentor-led classrooms, adaptive tests, doubt support, and result-focused academic planning for school and competitive exam aspirants.</p>
        </div>
        <div>
          <h3 class="mb-4 font-black dark:text-slate-100">Quick Links</h3>
          <div class="grid gap-2 text-sm font-bold text-slate-600 dark:text-slate-400">
            <a href="about.html">About Us</a>
            <a href="results.html">Results</a>
            <a href="gallery.html">Gallery</a>
            <a href="blog.html">Blog and News</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-black dark:text-slate-100">Courses</h3>
          <div class="grid gap-2 text-sm font-bold text-slate-600 dark:text-slate-400">
            <a href="courses.html">IIT-JEE</a>
            <a href="courses.html">NEET</a>
            <a href="courses.html">UPSC</a>
            <a href="courses.html">SSC and Banking</a>
            <a href="courses.html">Foundation</a>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-black dark:text-slate-100">Newsletter</h3>
          <p class="mb-4 text-sm leading-7 text-slate-600 dark:text-slate-400">Exam alerts, study plans, and scholarship updates every week.</p>
          <form class="flex gap-2" data-lead-form>
            <input class="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900" type="email" placeholder="Email address" required>
            <button class="btn-primary px-4" type="submit" aria-label="Subscribe"><i data-lucide="send" class="h-4 w-4"></i></button>
          </form>
          <div class="mt-5 space-y-2 text-sm font-bold text-slate-600 dark:text-slate-400">
            <p>+91 98765 43210</p>
            <p>admissions@achievers.edu</p>
            <p>Sector 21, Learning Avenue, New Delhi</p>
          </div>
        </div>
      </div>
      <div class="container-pad mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 Achievers Coaching Institute. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
    <a class="floating-whatsapp grid place-items-center" href="https://wa.me/919876543210" aria-label="Chat on WhatsApp">
      <i data-lucide="message-circle" class="h-6 w-6"></i>
    </a>
  `;
}
