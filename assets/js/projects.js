
document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    absensi: {
      title: "Automation Testing E-Absensi",
      category: "Final Project · Quality Assurance",
      description:
        "Pengujian fungsional aplikasi E-Absensi berbasis web menggunakan Playwright.",
      about:
        "Proyek tugas akhir ini menerapkan automation testing untuk menjalankan skenario pengujian secara otomatis. Pengujian menggunakan pendekatan Black Box Testing dan hasilnya ditinjau melalui laporan Playwright.",
      cover: "assets/images/playwright-preview.svg",
      tags: ["Playwright", "JavaScript", "Black Box Testing"],
      features: [
        "Pengujian fungsional aplikasi web",
        "Penyusunan skenario pengujian",
        "Pencatatan hasil pengujian",
        "Pemeriksaan laporan HTML Playwright"
      ],
      tech: ["Playwright", "JavaScript", "Visual Studio Code"],
      gallery: [
        "assets/images/projects/absensi-01.png",
        "assets/images/projects/absensi-02.png",
        "assets/images/projects/absensi-03.png"
      ],
      demo: "",
      repo: ""
    },

    skam: {
      title: "Sistem Survei Kepuasan SKAM",
      category: "Academic Project · Information System",
      description:
        "Sistem survei kepuasan pelayanan surat keterangan aktif mahasiswa berbasis website.",
      about:
        "Proyek akademik ini berfokus pada pembuatan sistem survei berbasis website. Dokumentasi dapat menampilkan halaman pengisian survei, pengelolaan aspek survei, serta dashboard admin sesuai implementasi proyek.",
      cover: "assets/images/project-placeholder.svg",
      tags: ["CodeIgniter 3", "PHP", "MySQL"],
      features: [
        "Halaman pengisian survei mahasiswa",
        "Penilaian dan komentar survei",
        "Pengelolaan data survei",
        "Dashboard admin"
      ],
      tech: ["PHP", "CodeIgniter 3", "MySQL", "HTML", "CSS"],
      gallery: [
        "assets/images/projects/skam-01.png",
        "assets/images/projects/skam-02.png",
        "assets/images/projects/skam-03.png"
      ],
      demo: "",
      repo: ""
    },

    inventory: {
      title: "Inventory & Stock Control",
      category: "Portfolio Project · Data Management",
      description:
        "Workbook Excel untuk pencatatan barang, transaksi stok, dan rekap inventori.",
      about:
        "Proyek ini dirancang sebagai latihan administrasi dan pengolahan data menggunakan Excel. Workbook dapat dikembangkan untuk mencatat barang masuk dan keluar, memantau stok, serta menyajikan laporan inventori.",
      cover: "assets/images/excel-preview.svg",
      tags: ["Excel", "Stock Control", "Reporting"],
      features: [
        "Data master barang",
        "Pencatatan stok masuk dan keluar",
        "Pemantauan stok tersedia",
        "Rekap inventori"
      ],
      tech: ["Microsoft Excel", "Formula Excel", "Data Validation"],
      gallery: [
        "assets/images/projects/inventory-01.png",
        "assets/images/projects/inventory-02.png",
        "assets/images/projects/inventory-03.png"
      ],
      demo: "",
      repo: ""
    },

    bendi: {
      title: "PT-Bendi-Car",
      category: "Academic Project · Web Development",
      description:
        "Proyek pengembangan website menggunakan teknologi web.",
      about:
        "Halaman ini menjadi dokumentasi proyek PT-Bendi-Car. Lengkapi penjelasan tujuan, fitur, dan hasil implementasi berdasarkan website serta kode yang benar-benar dibuat.",
      cover: "assets/images/project-placeholder.svg",
      tags: ["PHP", "MySQL", "HTML", "CSS"],
      features: [
        "Dokumentasi tujuan proyek",
        "Galeri tampilan website",
        "Penjelasan fitur sesuai implementasi"
      ],
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      gallery: [
        "assets/images/projects/bendi-01.png",
        "assets/images/projects/bendi-02.png",
        "assets/images/projects/bendi-03.png"
      ],
      demo: "",
      repo: ""
    },

    skamvnela: {
      title: "SKAMVNELA",
      category: "Project Archive · Web Development",
      description:
        "Arsip proyek website yang dilengkapi dokumentasi dan teknologi yang digunakan.",
      about:
        "Bagian ini menampilkan dokumentasi proyek SKAMVNELA. Sesuaikan uraian dan daftar fitur dengan implementasi aslinya agar informasi portofolio tetap akurat.",
      cover: "assets/images/project-placeholder.svg",
      tags: ["Web Development", "UI", "PHP"],
      features: [
        "Dokumentasi proyek",
        "Galeri screenshot",
        "Informasi teknologi yang digunakan"
      ],
      tech: ["PHP", "HTML", "CSS", "MySQL"],
      gallery: [
        "assets/images/projects/skamvnela-01.png",
        "assets/images/projects/skamvnela-02.png",
        "assets/images/projects/skamvnela-03.png"
      ],
      demo: "",
      repo: ""
    },

    smartkas: {
      title: "Smart Kas Class",
      category: "Learning Project · Application",
      description:
        "Proyek aplikasi kas kelas yang berfokus pada perancangan antarmuka dan pembelajaran aplikasi.",
      about:
        "Proyek ini mendokumentasikan proses perancangan UI/UX dan pembelajaran pengembangan aplikasi. Tambahkan detail alur penggunaan serta fitur berdasarkan hasil pengerjaan yang sebenarnya.",
      cover: "assets/images/project-placeholder.svg",
      tags: ["UI/UX", "Android Studio"],
      features: [
        "Dokumentasi desain antarmuka",
        "Galeri tampilan aplikasi",
        "Penjelasan alur penggunaan"
      ],
      tech: ["UI/UX", "Android Studio"],
      gallery: [
        "assets/images/projects/smartkas-01.png",
        "assets/images/projects/smartkas-02.png",
        "assets/images/projects/smartkas-03.png"
      ],
      demo: "",
      repo: ""
    }
  };

  const projectIds = Object.keys(projects);
  const dialog = document.getElementById("project-dialog");

  if (!dialog) {
    console.warn("Dialog proyek tidak ditemukan. Periksa ID HTML.");
    return;
  }

  const $ = (id) => document.getElementById(id);

  const title = $("detail-title");
  const category = $("detail-category");
  const description = $("detail-description");
  const about = $("detail-about");
  const cover = $("detail-cover");
  const tags = $("detail-tags");
  const features = $("detail-features");
  const tech = $("detail-tech");
  const gallery = $("detail-gallery");
  const demo = $("detail-demo");
  const repo = $("detail-repo");
  const count = $("project-count");

  let currentIndex = 0;

  function addListItems(element, items) {
    element.replaceChildren();

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      element.appendChild(li);
    });
  }

  function showLink(element, url) {
    if (url && url.trim() !== "") {
      element.href = url;
      element.hidden = false;
    } else {
      element.hidden = true;
      element.removeAttribute("href");
    }
  }

  function renderProject(id) {
    const project = projects[id];

    if (!project) return;

    currentIndex = projectIds.indexOf(id);

    title.textContent = project.title;
    category.textContent = project.category;
    description.textContent = project.description;
    about.textContent = project.about;

    cover.src = project.cover;
    cover.alt = `Pratinjau ${project.title}`;

    tags.replaceChildren();
    project.tags.forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tagText;
      tags.appendChild(tag);
    });

    addListItems(features, project.features);
    addListItems(tech, project.tech);

    gallery.replaceChildren();

    project.gallery.forEach((imagePath, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item";

      const img = document.createElement("img");
      img.src = imagePath;
      img.alt = `Dokumentasi ${project.title} ${index + 1}`;
      img.loading = "lazy";

      // Jika screenshot belum tersedia, gunakan gambar cover.
      img.addEventListener("error", () => {
        if (img.dataset.fallbackApplied !== "true") {
          img.dataset.fallbackApplied = "true";
          img.src = project.cover;
        }
      });

      const caption = document.createElement("figcaption");
      caption.textContent = `Dokumentasi ${String(index + 1).padStart(2, "0")}`;

      figure.append(img, caption);
      gallery.appendChild(figure);
    });

    showLink(demo, project.demo);
    showLink(repo, project.repo);

    const nextButton = $("view-next");
    const previousButton = $("view-previous");

    if (previousButton) {
      previousButton.textContent = "← Project Sebelumnya";
    }

    if (nextButton) {
      nextButton.textContent = "Project Selanjutnya →";
    }

    if (!dialog.open) {
      dialog.showModal();
    }
  }

  document.querySelectorAll(".detail-btn").forEach((button) => {
    button.addEventListener("click", () => {
      renderProject(button.dataset.project);
    });
  });

  $("close-detail")?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  $("view-next")?.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % projectIds.length;
    renderProject(projectIds[nextIndex]);
  });

  $("view-previous")?.addEventListener("click", () => {
    const previousIndex =
      (currentIndex - 1 + projectIds.length) % projectIds.length;

    renderProject(projectIds[previousIndex]);
  });

  // Filter kategori proyek.
  const filterButtons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("#project-grid [data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      let visibleCount = 0;

      cards.forEach((card) => {
        const show =
          selected === "all" || card.dataset.category === selected;

        card.hidden = !show;

        if (show) visibleCount++;
      });

      if (count) {
        count.textContent = String(visibleCount).padStart(2, "0");
      }
    });
  });

  // Pastikan jumlah awal sesuai jumlah kartu.
  if (count) {
    count.textContent = String(cards.length).padStart(2, "0");
  }
});
