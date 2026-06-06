1:"$Sreact.fragment"
3:I[7121,[],""]
4:I[4581,[],""]
:HL["/_next/static/css/b6d11d2668f9c0b6.css","style"]
:HL["/_next/static/css/73247620441739b4.css","style"]
:HL["/_next/static/css/0d221c41645a0c67.css","style"]
:HL["https://fonts.googleapis.com/css2?family=Righteous&display=swap","style"]
2:T819,
    (() => {
      const addProbe = () => {
        const main = document.querySelector('main');
        const hero = document.getElementById('homepage-hero');
        const erp = document.getElementById('homepage-erp');
        const wrapper = document.querySelector('.header__dropdown-menu--wrapper');
        const probe = document.createElement('pre');
        probe.id = 'debug-probe';
        probe.style.position = 'fixed';
        probe.style.left = '12px';
        probe.style.bottom = '12px';
        probe.style.zIndex = '2147483647';
        probe.style.maxWidth = '520px';
        probe.style.padding = '12px';
        probe.style.margin = '0';
        probe.style.background = 'rgba(255,255,0,0.94)';
        probe.style.color = '#000';
        probe.style.font = '12px/1.4 monospace';
        probe.style.whiteSpace = 'pre-wrap';
        probe.style.pointerEvents = 'none';

        const describe = (label, node) => {
          if (!node) return label + ': missing';
          const rect = node.getBoundingClientRect();
          const styles = window.getComputedStyle(node);
          return [
            label + ':',
            '  display=' + styles.display,
            '  visibility=' + styles.visibility,
            '  opacity=' + styles.opacity,
            '  position=' + styles.position,
            '  height=' + styles.height,
            '  minHeight=' + styles.minHeight,
            '  overflow=' + styles.overflow,
            '  rect=' + [rect.x, rect.y, rect.width, rect.height].map((v) => Math.round(v)).join(','),
          ].join('\n');
        };

        probe.textContent = [
          'body=' + document.body.className,
          describe('main', main),
          describe('hero', hero),
          describe('erp', erp),
          describe('dropdown wrapper', wrapper),
        ].join('\n\n');

        document.body.appendChild(probe);
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addProbe, { once: true });
      } else {
        addProbe();
      }
    })();
  0:{"rsc":["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b6d11d2668f9c0b6.css","precedence":"next"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/73247620441739b4.css","precedence":"next"}],["$","link","2",{"rel":"stylesheet","href":"/_next/static/css/0d221c41645a0c67.css","precedence":"next"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Righteous&display=swap","rel":"stylesheet"}]]}],["$","body",null,{"className":"locale-en debug-hero","children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","$L3",null,{"parallelRouterKey":"children","template":["$","$L4",null,{}]}]]}]]}]]}],"isPartial":false,"staleTime":300,"varyParams":null,"buildId":"w0Yz3BywlRp2Lf5NBvrK8"}
