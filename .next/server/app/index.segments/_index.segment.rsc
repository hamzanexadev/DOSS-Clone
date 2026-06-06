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
  0:{"rsc":["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b6d11d2668f9c0b6.css","precedence":"next"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/73247620441739b4.css","precedence":"next"}],["$","link","2",{"rel":"stylesheet","href":"/_next/static/css/0d221c41645a0c67.css","precedence":"next"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Righteous&display=swap","rel":"stylesheet"}]]}],["$","body",null,{"className":"locale-en debug-hero","children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","$L3",null,{"parallelRouterKey":"children","template":["$","$L4",null,{}],"notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],"$L5","$L6"]}]}]],[]]}]]}]]}]]}],"isPartial":false,"staleTime":300,"varyParams":null,"buildId":"w0Yz3BywlRp2Lf5NBvrK8"}
5:["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}]
6:["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]
