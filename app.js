/* ============================================================
   SUPPORTE LOGÍSTICA — Global JS
   Mobile menu + Modal de orçamento (injetado via JS em todas as páginas)
   ============================================================ */

const MODAL_HTML = `
<div class="modal-overlay" id="orcamento-modal" role="dialog" aria-modal="true" aria-label="Solicitar orçamento">
  <div class="modal-box">
    <div class="modal-head">
      <div class="mh-text">
        <div class="mh-eyebrow">Solicitar orçamento</div>
        <h3>Vamos estruturar sua operação logística?</h3>
      </div>
      <button class="modal-close" id="modal-close-btn" aria-label="Fechar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="modal-body">
      <div id="modal-form-wrap">
        <form id="modal-orcamento-form" class="mf-group" novalidate>
          <div class="mf-row">
            <div class="mf-field">
              <label for="mf-nome">Nome <span>*</span></label>
              <input type="text" id="mf-nome" name="nome" placeholder="Seu nome" required />
            </div>
            <div class="mf-field">
              <label for="mf-cargo">Cargo</label>
              <input type="text" id="mf-cargo" name="cargo" placeholder="Seu cargo" />
            </div>
          </div>
          <div class="mf-field">
            <label for="mf-email">E-mail corporativo <span>*</span></label>
            <input type="email" id="mf-email" name="email" placeholder="email@empresa.com.br" required />
          </div>
          <div class="mf-row">
            <div class="mf-field">
              <label for="mf-telefone">Telefone <span>*</span></label>
              <input type="tel" id="mf-telefone" name="telefone" placeholder="+55 (xx) xxxxx-xxxx" required />
            </div>
            <div class="mf-field">
              <label for="mf-cnpj">CNPJ</label>
              <input type="text" id="mf-cnpj" name="cnpj" placeholder="00.000.000/0000-00" />
            </div>
          </div>
          <div class="mf-row">
            <div class="mf-field">
              <label for="mf-empresa">Empresa <span>*</span></label>
              <input type="text" id="mf-empresa" name="empresa" placeholder="Nome da empresa" required />
            </div>
            <div class="mf-field">
              <label for="mf-cidade">Cidade / Estado <span>*</span></label>
              <input type="text" id="mf-cidade" name="cidade" placeholder="Ex.: São Paulo / SP" required />
            </div>
          </div>
          <div class="mf-field">
            <label for="mf-segmento">Segmento de atuação</label>
            <select id="mf-segmento" name="segmento">
              <option value="">Selecione seu segmento</option>
              <option>Indústria</option>
              <option>Distribuidor</option>
              <option>Atacado</option>
              <option>Varejo</option>
              <option>E-commerce</option>
              <option>Importação / Exportação</option>
              <option>Outro</option>
            </select>
          </div>
          <div class="mf-field">
            <label>Soluções de interesse</label>
            <div class="mf-checks">
              <label class="mf-check"><input type="checkbox" name="solucao" value="armazenagem" /><span>Armazenagem</span></label>
              <label class="mf-check"><input type="checkbox" name="solucao" value="transportes" /><span>Transportes</span></label>
              <label class="mf-check"><input type="checkbox" name="solucao" value="distribuicao" /><span>Distribuição</span></label>
              <label class="mf-check"><input type="checkbox" name="solucao" value="porto-seco" /><span>Porto Seco</span></label>
              <label class="mf-check"><input type="checkbox" name="solucao" value="entreposto" /><span>Entreposto ZFM</span></label>
              <label class="mf-check"><input type="checkbox" name="solucao" value="torre" /><span>Torre de Controle</span></label>
            </div>
          </div>
          <div class="mf-field">
            <label for="mf-mensagem">Conte sobre sua operação</label>
            <textarea id="mf-mensagem" name="mensagem" placeholder="Descreva sua necessidade logística, volume, rotas e qualquer informação relevante..."></textarea>
          </div>
          <button type="submit" class="modal-submit">
            Solicitar orçamento
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <p class="modal-lgpd">Seus dados são tratados com segurança conforme a LGPD. Não fazemos spam.</p>
        </form>
      </div>
      <div class="modal-success" id="modal-success">
        <div class="ms-ico">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3>Mensagem enviada!</h3>
        <p>Nossa equipe comercial entrará em contato em até 24 horas úteis. Obrigado pelo interesse na Supporte Logística.</p>
      </div>
    </div>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile menu ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ── Inject modal HTML ── */
  document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
  const overlay = document.getElementById('orcamento-modal');

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── Wire all "Solicitar orçamento" triggers ── */
  document.querySelectorAll(
    '.nav-cta, a[href="contato.html"], .btn-primary[href="contato.html"], .btn-dark[href="contato.html"]'
  ).forEach(el => {
    // Only intercept links pointing to contato.html or the nav CTA
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  /* ── Close triggers ── */
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ── Form submit ── */
  document.getElementById('modal-orcamento-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const required = ['mf-nome', 'mf-email', 'mf-telefone', 'mf-empresa', 'mf-cidade'];
    let valid = true;
    required.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.style.borderColor = '#EF4444';
        el.addEventListener('input', () => el.style.borderColor = '', { once: true });
        valid = false;
      }
    });
    if (!valid) return;

    document.getElementById('modal-form-wrap').style.display = 'none';
    const success = document.getElementById('modal-success');
    success.style.display = 'flex';

    // Reset after close
    overlay.addEventListener('transitionend', function reset() {
      if (!overlay.classList.contains('open')) {
        document.getElementById('modal-form-wrap').style.display = '';
        success.style.display = 'none';
        document.getElementById('modal-orcamento-form').reset();
        overlay.removeEventListener('transitionend', reset);
      }
    });
  });

  /* ── FAQ accordion (suporte.html) ── */
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Scroll reveal ── */
  (function () {
    const GROUPS = [
      ['.flow-track',           '.flow-step'],
      ['.segments-grid',        '.seg-card'],
      ['.diffs-right',          '.diff-item'],
      ['.proof-card',           '.proof-item'],
      ['.mod-grid',             '.mod-card'],
      ['.features-grid',        '.feat-card'],
      ['.service-grid',         '.service-card'],
      ['.process-list',         '.process-item'],
      ['.units-strip',          '.unit-cell'],
      ['.seg-detail-grid',      '.seg-detail-card'],
      ['.hubs',                 '.hub'],
      ['.modais-grid',          '.modal-card'],
      ['.kpi-band',             '.kpi-cell'],
      ['.tower-pillar',         '.tower-module'],
      ['.badge-wall',           '.tag'],
      ['.diffs-grid',           '.diffs-left'],
    ];

    const SINGLES = [
      '.sec-head',
      '.hero-photo-panel',
      '.integ-photo-band',
      '.clients-inner',
      '.map-wrap',
      '.ops-strip',
    ];

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

    function prep(el, delay) {
      el.classList.add('js-reveal');
      if (delay) el.style.transitionDelay = delay + 'ms';
      observer.observe(el);
    }

    GROUPS.forEach(function (pair) {
      document.querySelectorAll(pair[0]).forEach(function (parent) {
        parent.querySelectorAll(pair[1]).forEach(function (child, i) {
          prep(child, i * 80);
        });
      });
    });

    SINGLES.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { prep(el, 0); });
    });
  })();

  /* ── Counter animation ── */
  (function () {
    const proofNums = document.querySelectorAll('.proof-item .num, .kpi-cell .n');
    if (!proofNums.length) return;

    const counterObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        counterObs.unobserve(el);

        // Collect text nodes (number part only, ignoring <span> children)
        const spanEl = el.querySelector('span');
        const suffix = spanEl ? spanEl.outerHTML : '';
        const rawText = el.textContent;
        const numMatch = rawText.match(/[\d,\.]+/);
        if (!numMatch) return;

        const rawNum = numMatch[0].replace(',', '.');
        const target = parseFloat(rawNum);
        const isInt = rawNum.indexOf('.') === -1;
        const prefix = rawText.startsWith('+') ? '+' : '';

        let start = null;
        const dur = 1400;

        function tick(ts) {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          const eased = 1 - Math.pow(1 - prog, 3);
          const val = isInt ? Math.round(target * eased) : (target * eased).toFixed(1);
          el.innerHTML = prefix + val + suffix;
          if (prog < 1) requestAnimationFrame(tick);
          else el.innerHTML = prefix + (isInt ? target : target.toFixed(1)) + suffix;
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });

    proofNums.forEach(function (el) { counterObs.observe(el); });
  })();

  /* ── Contact page own form (contato.html) ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const required = ['nome', 'email', 'telefone', 'empresa', 'cidade'];
      let valid = true;
      required.forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.value.trim()) {
          el.style.borderColor = '#EF4444';
          el.addEventListener('input', () => el.style.borderColor = '', { once: true });
          valid = false;
        }
      });
      if (!valid) return;
      document.getElementById('form-content').style.display = 'none';
      document.getElementById('form-success').style.display = 'flex';
    });
  }

});
