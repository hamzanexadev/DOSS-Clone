1:"$Sreact.fragment"
3:I[7121,[],""]
4:I[4581,[],""]
9:I[7123,[],"default",1]
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
  0:{"P":null,"c":["",""],"q":"","i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",16],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b6d11d2668f9c0b6.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/73247620441739b4.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","2",{"rel":"stylesheet","href":"/_next/static/css/0d221c41645a0c67.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"href":"https://fonts.googleapis.com/css2?family=Righteous&display=swap","rel":"stylesheet"}]]}],["$","body",null,{"className":"locale-en debug-hero","children":[["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$2"}}],["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],"$L5","$L6"]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}]]}]]}],{"children":["$L7",{},null,false,null]},null,false,null],"$L8",false]],"m":"$undefined","G":["$9",[]],"S":true,"h":null,"s":"$undefined","l":"$undefined","p":"$undefined","d":"$undefined","b":"w0Yz3BywlRp2Lf5NBvrK8"}
a:I[7506,["66","static/chunks/dc112a36-654a92d375332ba2.js","974","static/chunks/app/page-e1f3c31c79c046ae.js"],"HomePage"]
b:I[484,[],"OutletBoundary"]
c:"$Sreact.suspense"
e:I[484,[],"ViewportBoundary"]
10:I[484,[],"MetadataBoundary"]
5:["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}]
6:["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]
7:["$","$1","c",{"children":[["$","$La",null,{}],null,["$","$Lb",null,{"children":["$","$c",null,{"name":"Next.MetadataOutlet","children":"$@d"}]}]]}]
8:["$","$1","h",{"children":[null,["$","$Le",null,{"children":"$Lf"}],["$","div",null,{"hidden":true,"children":["$","$L10",null,{"children":["$","$c",null,{"name":"Next.Metadata","children":"$L11"}]}]}],null]}]
f:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5"}]]
12:I[6869,[],"IconMark"]
d:null
11:[["$","title","0",{"children":"DOSS | Adaptive ERP and Operations Cloud"}],["$","meta","1",{"name":"description","content":"Tools for real-world operations. Level-up from ERP and spreadsheets with the Operations Cloud and Adaptive Resource Platform (ARP)."}],["$","link","2",{"rel":"manifest","href":"/assets/site-DCsMd7Bk.webmanifest","crossOrigin":"$undefined"}],["$","meta","3",{"property":"og:title","content":"DOSS | Adaptive ERP and Operations Cloud"}],["$","meta","4",{"property":"og:description","content":"Tools for real-world operations. Level-up from ERP and spreadsheets with the Operations Cloud and Adaptive Resource Platform (ARP)."}],["$","meta","5",{"property":"og:url","content":"https://www.doss.com/"}],["$","meta","6",{"property":"og:site_name","content":"DOSS | Adaptive ERP and Operations Cloud"}],["$","meta","7",{"property":"og:image","content":"https://www.doss.com/assets/img/og-image-DgTw3QV_.png"}],["$","meta","8",{"property":"og:image:width","content":"1200"}],["$","meta","9",{"property":"og:image:height","content":"1200"}],["$","meta","10",{"property":"og:image:alt","content":"Tools for real-world operations."}],["$","meta","11",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","12",{"name":"twitter:title","content":"DOSS | Adaptive ERP and Operations Cloud"}],["$","meta","13",{"name":"twitter:description","content":"Tools for real-world operations. Level-up from ERP and spreadsheets with the Operations Cloud and Adaptive Resource Platform (ARP)."}],["$","meta","14",{"name":"twitter:image","content":"https://www.doss.com/assets/img/og-image-DgTw3QV_.png"}],["$","link","15",{"rel":"shortcut icon","href":"/assets/img/favicon-C21zMLzH.ico"}],["$","link","16",{"rel":"icon","href":"/assets/img/favicon-96x96-KjyAR8AR.png","sizes":"96x96","type":"image/png"}],["$","link","17",{"rel":"icon","href":"/assets/favicon-BTmdGodD.svg","type":"image/svg+xml"}],["$","link","18",{"rel":"apple-touch-icon","href":"/assets/img/apple-touch-icon-BCXGCEhF.png"}],["$","$L12","19",{}]]
