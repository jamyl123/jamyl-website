/* Composants partagés : quiz à retour immédiat et étapes cochables.
   Quiz : <div class="question" data-juste="2" data-explication="...">
            <p>Question</p><button>A</button><button>B</button>...
          </div>   (data-juste commence à 1)
   Étapes : <ol class="etapes" data-cle="lecon-0001"><li>...</li></ol> */
(function () {
  function lire(cle) { try { return JSON.parse(localStorage.getItem(cle) || '[]'); } catch (e) { return []; } }
  function ecrire(cle, val) { try { localStorage.setItem(cle, JSON.stringify(val)); } catch (e) {} }

  document.querySelectorAll('.quiz').forEach(function (quiz) {
    var questions = quiz.querySelectorAll('.question');
    var score = quiz.querySelector('.score');
    var reponses = 0, bonnes = 0;
    questions.forEach(function (q) {
      var juste = parseInt(q.dataset.juste, 10) - 1;
      var boutons = q.querySelectorAll('button');
      var retour = document.createElement('div');
      retour.className = 'retour';
      q.appendChild(retour);
      boutons.forEach(function (b, i) {
        b.addEventListener('click', function () {
          boutons.forEach(function (x) { x.disabled = true; });
          boutons[juste].classList.add('juste');
          var ok = i === juste;
          if (!ok) b.classList.add('faux');
          reponses++; if (ok) bonnes++;
          retour.innerHTML = '<strong>' + (ok ? 'Juste.' : 'Pas tout à fait.') + '</strong> ' + (q.dataset.explication || '');
          retour.classList.add('visible');
          if (score && reponses === questions.length) {
            score.textContent = 'Score : ' + bonnes + ' / ' + questions.length +
              (bonnes === questions.length ? '. Parfait.' : '. Relisez les explications, puis refaites le quiz demain.');
          }
        });
      });
    });
  });

  document.querySelectorAll('.etapes').forEach(function (liste) {
    var cle = 'etapes-' + (liste.dataset.cle || location.pathname);
    var faits = lire(cle);
    liste.querySelectorAll('li').forEach(function (li, i) {
      var c = document.createElement('input');
      c.type = 'checkbox';
      c.setAttribute('aria-label', 'Étape ' + (i + 1) + ' terminée');
      c.checked = faits.indexOf(i) !== -1;
      li.classList.toggle('fait', c.checked);
      li.prepend(c);
      c.addEventListener('change', function () {
        li.classList.toggle('fait', c.checked);
        var f = lire(cle).filter(function (x) { return x !== i; });
        if (c.checked) f.push(i);
        ecrire(cle, f);
      });
    });
  });
})();
