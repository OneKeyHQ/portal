"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[411],{8411:function(e){var r=new function(){var e=this;this.version="3.3.38npm",this.vsakt={c:"97",f:"96",s:"15.2",e:"97",i:"12",ios:"15.0",samsung:"15.0.2",o:"83",e_a:"97",o_a:"66.2",y:"22.1.0",v:"5.1",uc:"13.4.0"},this.vsinsecure_below={c:"88.0.4324.150",f:76,s:"11.1.1",e:16,i:11,ios:"12.3",samsung:12,o:62,o_a:52,y:"20",v:"2.7",uc:"13.1"},this.vsdefault={c:-3,f:-3,s:-1,e:17,i:11,ios:10,samsung:9.9,o:-3,o_a:-3,y:20.4,v:2.6,uc:13,a:535},this.names={c:"Chrome",f:"Firefox",s:"Safari",e:"Edge",i:"Internet Explorer",ios:"iOS",samsung:"Samsung Internet",o:"Opera",o_a:"Opera",e_a:"Edge",y:"Yandex Browser",v:"Vivaldi",uc:"UC Browser",a:"Android Browser",x:"Other",silk:"Silk"},this.get_browser=function(r){r=(r||navigator.userAgent).replace("_",".");var a={n:"x",v:0,t:"other browser",age_years:void 0,no_device_update:!1,available:e.vsakt};function n(e,a){return!!new RegExp(a,"i").test(r)&&e}a.other=n("bot","Pagespeed|pingdom|Preview|ktxn|dynatrace|Ruxit|PhantomJS|Headless|Lighthouse|bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor")||n("TV","SMART-TV|SmartTV")||n("niche browser","motorola edge|Comodo.Dragon|OculusBrowser|Falkon|Brave|Classic Browser|Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|Basilisk|QupZilla|Otter|Midori|qutebrowser|slimjet")||n("mobile without upgrade path or landing page","OPR/44.12.2246|cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10"),a.embedded=/"QtWebEngine|Teams|Electron/i.test(r),a.mobile=/iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(r),a.discontinued=/netscape|greenbrowser|camino|flot|fennec|galeon|coolnovo/i.test(r);for(var i=[["CriOS.VV","c","ios"],["FxiOS.VV","f","ios"],["Trident.*rv:VV","i","i"],["Trident.VV","i","i"],["UCBrowser.VV","uc","c"],["MSIE.VV","i","i"],["Edge.VV","e","e"],["Edg.VV","e","c"],["EdgA.VV","e_a","c"],["Vivaldi.VV","v","c"],["Android.*OPR.VV","o_a","c"],["OPR.VV","o","c"],["YaBrowser.VV","y","c"],["SamsungBrowser.VV","samsung","c"],["Silk.VV","silk","c"],["Chrome.VV","c","c"],["Firefox.VV","f","f"],[" OS.VV.*Safari","ios","ios"],["Version.VV.*Safari","s","s"],["Safari.VV","s","s"],["Opera.*Version.VV","o"],["Opera.VV","o"]],o="(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)",s=0;s<i.length;s++)if(r.match(new RegExp(i[s][0].replace("VV",o),"i"))){a.n=i[s][1],a.engine=i[s][2];break}if(a.fullv=RegExp.$1,a.v=parseFloat(a.fullv),/windows.nt.5|windows.nt.4|windows.nt.6.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5/i.test(r)&&(a.no_device_update=!0,a.available={}),"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1&&(a.n="ios",a.engine="ios",a.fullv=a.v=13,a.no_device_update=!0),/iphone|ipod|ipad|ios/i.test(r)){r.match(new RegExp("OS."+o,"i")),a.n="ios",a.fullv=RegExp.$1,a.v=parseFloat(a.fullv),a.engine="ios";var t=e.available_ios(r,a.v);t<12&&11===Math.round(a.v)&&(t=12),a.available={ios:t},parseFloat(a.available.ios)<11&&(a.no_device_update=!0)}if(/windows.nt.5.1|windows.nt.5.2|windows.nt.6.0/i.test(r)&&(a.available={c:49.9,f:52.9},a.no_device_update=!0),/os x 10.6/i.test(r)&&(a.available={s:"5.1.10",c:49.9,f:48},a.no_device_update=!0),/os x 10.7|os x 10.8/i.test(r)&&(a.available={s:"6.2.8",c:49.9,f:48},a.no_device_update=!0),/os x 10.9/i.test(r)&&(a.available.s="9.1.3"),/os x 10.10/i.test(r)&&(a.available.s="10.1.2"),r.indexOf("Android")>-1&&"s"===a.n){var d=parseInt((/WebKit\/([0-9]+)/i.exec(r)||0)[1],10)||2e3;d<=534&&(a.n="a",a.fullv=a.v=d,a.is_insecure=!0)}a.t=e.names[a.n]+" "+a.v,a.is_supported=a.is_latest=e.vsakt[a.n]?e.less(a.fullv,e.vsakt[a.n])<=0:void 0,a.vmaj=Math.round(a.v),a.is_insecure=a.is_insecure||!e.vsinsecure_below[a.n]?void 0:1===e.less(a.fullv,e.vsinsecure_below[a.n]),("f"===a.n&&91===a.vmaj||"i"===a.n&&11===a.vmaj)&&(a.is_supported=!0,a.is_insecure=!1,"f"===a.n&&(a.esr=!0)),"ios"===a.n&&a.v>10.3&&(a.is_supported=!0),"a"!==a.n&&"x"!==a.n||(a.t=e.names[a.n]),"e"===a.n&&(a.t=e.names[a.n]+" "+a.vmaj,a.is_supported=1!=e.less(a.fullv,"18.15063")),a.n in["c","f","o","e"]&&e.less(a.fullv,parseFloat(e.vsakt[a.n])-1)<=0&&(a.is_supported=!0);var l={f:7,c:8,o:8,i:1,e:1,s:1};l[a.n]&&(a.age_years=Math.round((e.vsakt[a.n]-a.v)/l[a.n]*10)/10||0);return a.engine&&(r.match(new RegExp({e:"Edge.VV",c:"Chrome.VV",f:"Firefox.VV",s:"Version.VV",i:"MSIE.VV",ios:" OS.VV"}[a.engine].replace("VV",o),"i")),a.engine_version=parseFloat(RegExp.$1)),a},this.semver=function(e){if(e instanceof Array)return e;var r=(e+".0.0.0").split(".");return[parseInt(r[0])||0,parseInt(r[1])||0,parseInt(r[2])||0,parseInt(r[3])||0]},this.less=function(r,a){r=e.semver(r),a=e.semver(a);for(var n=0;;n++){if(n>=r.length)return n>=a.length?0:1;if(n>=a.length)return-1;var i=a[n]-r[n];if(i)return i>0?1:-1}},this.available_ios=function(e,r){var a=Math.max(window.screen.height,window.screen.width),n=window.devicePixelRatio;return/ipad/i.test(e)?1024==a&&2==n?10:1112==a||1366==a?15:1024==a&&r<6?5:9:1==n?6:3==n||812==a||736==a||667==a?15:568==a?10:480==a?7:6}};window.$bu_getBrowser=r.get_browser;e.exports=function(e,n){var i,o=window.navigator,s=(e=window._buorgres=e||{}).l||(o.languages?o.languages[0]:null)||o.language||o.browserLanguage||o.userLanguage||document.documentElement.getAttribute("lang")||"en";e.llfull=s.replace("_","-").toLowerCase().substr(0,5),e.ll=e.llfull.substr(0,2),e.domain=void 0!==e.domain?e.domain:(/file:/.test(location.href)?"https:":"")+"//browser-update.org",e.apiver=e.api||e.c||-1,e.jsv=r.version;var t=e.apiver<2018&&{i:10,f:11,o:21,s:8,c:30}||{},d=e.notify||e.vs||{};d.e=d.e||d.i,d.i=d.i||d.e;var l=e.required||{};for(i in l.e=l.e||l.i,l.i||(l.i=l.e,r.vsakt.i=r.vsakt.e),r.vsdefault)d[i]&&(r.less(d[i],0)>=0?l[i]=parseFloat(r.vsakt[i])+parseFloat(d[i])+.01:l[i]=parseFloat(d[i])+.01),i in l&&null!=l[i]||(l[i]=r.vsdefault[i]),r.less(l[i],0)>=0&&(l[i]=parseFloat(r.vsakt[i])+parseFloat(l[i])),t[i]&&1===r.less(l[i],t[i])&&(l[i]=t[i]);l.ios=l.ios||l.s,l.i<79&&l.i>65&&(l.i=l.i-60),l.e<79&&l.e>65&&(l.e=l.e-60),e.required=l,e.reminder=e.reminder<.1?0:e.reminder||168,e.reminderClosed=e.reminderClosed<1?0:e.reminderClosed||168,e.onshow=e.onshow||function(e){},e.onclick=e.onclick||function(e){},e.onclose=e.onclose||function(e){},e.pageurl=e.pageurl||location.hostname||"x",e.newwindow=!1!==e.newwindow,e.test=n||e.test||"#test-bu"===location.hash||!1,e.ignorecookie=e.ignorecookie||"#ignorecookie-bu"===location.hash,e.reasons=[],e.hide_reasons=[],e.notified=function(e){var a=e.browser=r.get_browser(e.override_ua);return e.is_below_required=l[a.n]&&1===r.less(a.fullv,l[a.n]),!1!==a.other&&e.hide_reasons.push("is other browser:"+a.other),!1!==a.embedded&&e.hide_reasons.push("is embedded browser:"+a.embedded),a.esr&&!e.notify_esr&&e.hide_reasons.push("Extended support (ESR)"),a.mobile&&!1===e.mobile&&e.hide_reasons.push("do not notify mobile"),a.is_latest&&e.hide_reasons.push("is latest version of the browser"),a.no_device_update&&e.hide_reasons.push("no device update"),e.is_below_required&&e.reasons.push("below required"),(e.insecure||e.unsecure)&&a.is_insecure&&e.reasons.push("insecure"),e.unsupported&&!a.is_supported&&e.reasons.push("no vendor support"),!(e.hide_reasons.length>0)&&e.reasons.length>0}(e),e.already_shown=document.cookie.indexOf("browserupdateorg=pause")>-1&&!e.ignorecookie,(e.test||e.notified&&!e.already_shown)&&(e.setCookie=function(e){document.cookie="browserupdateorg=pause; expires="+new Date((new Date).getTime()+36e5*e).toGMTString()+"; path=/; SameSite=Lax"+(/https:/.test(location.href)?"; Secure":"")},e.already_shown&&(e.ignorecookie||e.test)&&e.setCookie(-10),e.reminder>0&&e.setCookie(e.reminder),e.nomessage?e.onshow(e):a())};var a=function(){var e=window._buorgres,r=$bu_getBrowser(),a=e.burl||"http"+(/MSIE/i.test(navigator.userAgent)?"":"s")+"://browser-update.org/";e.url||(e.url=a+(e.l&&e.l+"/"||"")+"update-browser.html"+(e.test?"?force_outdated=true":"")+"#"+e.jsv+":"+e.pageurl),e.url_permanent_hide=e.url_permanent_hide||a+"block-ignore-browser-update-warning.html";var n,i={};i.en={msg:"Your web browser ({brow_name}) is out of date.",msgmore:"Update your browser for more security, speed and the best experience on this site.",bupdate:"Update browser",bignore:"Ignore",remind:"You will be reminded in {days} days.",bnever:"Never show again"},i.ar={msg:"متصفح الإنترنت الخاص بك ({brow_name}) غير مُحدّث.",msgmore:"قم بتحديث المتصفح الخاص بك لمزيد من الأمان والسرعة ولأفضل تجربة على هذا الموقع.",bupdate:"تحديث المتصفح",bignore:"تجاهل",remind:"سيتم تذكيرك في غضون {days} أيام.",bnever:"لا تظهر مرة أخرى"},i.bg={msg:"Вашият уеб браузър ({brow_name}) е остарял.",msgmore:"Актуализирайте браузъра си за повече сигурност, бързина и най-доброто изживяване на този сайт.",bupdate:"Актуализиране на браузъра",bignore:"игнорирай",remind:"Ще ви бъде напомнено след {days} дни.",bnever:"Никога повече да не се показва"},i.ca={msg:"El teu navegador ({brow_name}) està desactualitzat.",msgmore:"Actualitzeu el vostre navegador per obtenir més seguretat, velocitat i una millor experiència en aquest lloc.",bupdate:"Actualitza el navegador",bignore:"Ignorar",remind:"T'ho recordarem d'aquí a {days} dies.",bnever:"No ho tornis a mostrar"},i.cs={msg:"Váš prohlížeč ({brow_name}) je zastaralý.",msgmore:"Aktualizujte prohlížeč pro lepší zabezpečení, rychlost a nejlepší zážitek z tohoto webu.",bupdate:"Aktualizovat prohlížeč",bignore:"Ignorovat",remind:"Znovu budete upozorněni za {days} dnů.",bnever:"Již nezobrazovat"},i.cy={msg:"Mae eich porwr gwe ({brow_name}) angen ei ddiweddaru.",msgmore:"Diweddarwch eich porwr i gael mwy o ddiogelwch, cyflymder a'r profiad gorau ar y safle hwn.",bupdate:"Diweddaru porwr",bignore:"Anwybyddu",remind:"Byddwn yn eich atgoffa mewn {days} diwrnod.",bnever:"Peidiwch â dangos eto"},i.da={msg:"Din web browser ({brow_name}) er forældet",msgmore:"Opdater din browser for mere sikkerhed, hastighed og den bedste oplevelse på denne side.",bupdate:"Opdater browser",bignore:"Ignorer",remind:"Du vil blive påmindet om {days} dage.",bnever:"Vis aldrig igen"},i.de={msg:"Ihr Webbrowser ({brow_name}) ist veraltet.",msgmore:"Aktualisieren Sie Ihren Browser für mehr Sicherheit, Geschwindigkeit und den besten Komfort auf dieser Seite.",bupdate:"Browser aktualisieren",bignore:"Ignorieren",remind:"Sie werden in {days} Tagen wieder erinnert.",bnever:"Nie wieder anzeigen"},i.el={msg:"Το πρόγραμμα περιήγησής σας ({brow_name}) είναι απαρχαιωμένο.",msgmore:"Ενημερώστε το πρόγραμμα περιήγησής σας για περισσότερη ασφάλεια, ταχύτητα και την καλύτερη εμπειρία σ' αυτόν τον ιστότοπο.",bupdate:"Ενημερώστε το πρόγραμμα περιήγησης",bignore:"Αγνοήστε",remind:"Θα σας το υπενθυμίσουμε σε {days} ημέρες.",bnever:"Να μην εμφανιστεί ξανά"},i.es={msg:"Su navegador web ({brow_name}) está desactualizado.",msgmore:"Actualice su navegador para obtener más seguridad, velocidad y para disfrutar de la mejor experiencia en este sitio.",bupdate:"Actualizar navegador",bignore:"Ignorar",remind:"Se le recordará en {days} días.",bnever:"No mostrar de nuevo"},i.et={msg:"Teie veebilehitseja ({brow_name}) on vananenud.",msgmore:"Veebilehitseja uuendamisega kaasneb nii parem turvalisus, kiirus kui ka kasutusmugavus.",bupdate:"Uuenda veebilehitsejat",bignore:"Eira",remind:"Uus meeldetuletus {days} päeva pärast.",bnever:"Ära kunagi enam näita"},i.fa={msg:"مرورگر شما ({brow_name}) قدیمی است.",msgmore:"برای ایمنی، سرعت و تجربه بهتر مرورگر خود را به‌روز کنید.",bupdate:"به‌روزرسانی مرورگر",bignore:"نادیده گرفتن",remind:"به شما تا {days} روز دیگر دوباره یاد‌آوری خواهد شد.",bnever:"هرگز نمایش نده"},i.fi={msg:"Selaimesi ({brow_name}) on vanhentunut.",msgmore:"Päivitä selaimesi saadaksesi tietoturvapäivityksiä, nopeutta sekä parhaan käyttökokemuksen sivustolla.",bupdate:"Päivitä selain",bignore:"Ohita",remind:"Saat uuden muistutuksen {days} päivän päästä.",bnever:"Älä näytä uudestaan"},i.fr={msg:"Votre navigateur Web ({brow_name}) n'est pas à jour.",msgmore:"Mettez à jour votre navigateur pour plus de sécurité et de rapidité et une meilleure expérience sur ce site.",bupdate:"Mettre à jour le navigateur",bignore:"Ignorer",remind:"Vous serez rappelé dans {days} jours.",bnever:"Ne plus afficher"},i.gl={msg:"Tá an líonléitheoir agat ({brow_name}) as dáta.",msgmore:"Actualiza o teu navegador para obter máis seguridade, rapidez e mellor experiencia neste sitio.",bupdate:"Actualizar navegador web",bignore:"Ignorar",remind:"Lembraralle en {days} días.",bnever:"Non volver mostrar máis"},i.he={msg:"דפדפן ({brow_name}) שלך אינו מעודכן.",msgmore:"עדכן/י את הדפדפן שלך לשיפור האבטחה והמהירות וכדי ליהנות מהחוויה הטובה ביותר באתר זה.",bupdate:"עדכן דפדפן",bignore:"התעלם",remind:"תקבל/י תזכורת בעוד  {days} ימים.",bnever:"אל תציג שוב"},i.hi={msg:"आपका वेब ब्राउज़र ({brow_name}) पुराना है।",msgmore:"इस साइट पर अधिक सुरक्षा, गति और सर्वोत्तम अनुभव करने के लिए अपने ब्राउज़र को अपडेट करें ।",bupdate:"ब्राउज़र अपडेट करें",bignore:"नजरअंदाज करें",remind:"आपको {days} दिनों में याद दिलाया जाएगा।",bnever:"फिर कभी मत दिखाना"},i.hu={msg:"Az Ön webböngészője ({brow_name}) elavult.",msgmore:"Frissítse böngészőjét a nagyobb biztonság, sebesség és élmény érdekében!",bupdate:"Böngésző frissítése",bignore:"Mellőzés",remind:"Újra emlékeztetünk {days} napon belül.",bnever:"Ne mutassa többet"},i.id={msg:"Peramban web ({brow_name}) Anda sudah usang.",msgmore:"Perbarui peramban Anda untuk pengalaman terbaik, lebih aman, dan cepat di situs ini.",bupdate:"Perbarui peramban",bignore:"Abaikan",remind:"Anda akan diingatkan kembali dalam {days} hari.",bnever:"Jangan pernah tampilkan lagi"},i.it={msg:"Il tuo browser ({brow_name}) non è aggiornato.",msgmore:"Aggiorna il browser per una maggiore sicurezza, velocità e la migliore esperienza su questo sito.",bupdate:"Aggiorna browser",bignore:"Ignora",remind:"Riceverai un promemoria tra {days} giorni.",bnever:"Non mostrare di nuovo"},i.ja={msg:"お使いのブラウザ（{brow_name}）は最新版ではありません。",msgmore:"セキュリティ、スピード、そしてこのサイトでの最良の体験のためにお使いのブラウザを更新してください。",bupdate:"ブラウザを更新する",bignore:"無視する",remind:"{days} 日後にもう一度お知らせします。",bnever:"次回から表示しない"},i.ko={msg:"귀하의 웹 브라우저({brow_name})는 오래되었습니다.",msgmore:"이 사이트에서 보안, 속도와 최상의 경험을 얻으려면 브라우저를 업데이트하십시오.",bupdate:"브라우저 업데이트하기",bignore:"무시하기",remind:"{days}일 후에 알려 드립니다.",bnever:"다시 표시하지 않기"},i.lt={msg:"Jūsų naršyklė ({brow_name}) yra pasenusi.",msgmore:"Atsinaujinkite savo naršyklę norėdami gauti daugiau saugumo, greičio ir pačių geriausių patirčių šioje svetainėje.",bupdate:"Atnaujinti naršyklę",bignore:"Nepaisyti",remind:"Jums bus priminta po {days} dienų.",bnever:"Daugiau niekada nerodyti"},i.lv={msg:"Jūsu pārlūkprogramma ({brow_name}) ir novecojusi.",msgmore:"Atjaunojiet savu pārlūkprogrammu lielākai drošībai, ātrumam un labākai pieredzei ar šo vietni.",bupdate:"Atjaunināt pārlūkprogrammu",bignore:"Ignorēt",remind:"Jums tiks parādīts atgādinājums pēc {days} dienām.",bnever:"Vairs nerādīt"},i.ms={msg:"Pelayar web anda ({brow_name}) sudah lapuk.",msgmore:"Kemas kini pelayar anda untuk lebih keselamatan, kelajuan dan pengalaman terbaik di laman web ini.",bupdate:"Kemas kini pelayar",bignore:"Abaikan",remind:"Anda akan diingatkan dalam {days} hari.",bnever:"Jangan tunjukkan lagi"},i.nl={msg:"Uw webbrowser ({brow_name}) is verouderd.",msgmore:"Update uw browser voor meer veiligheid, snelheid en om deze site optimaal te kunnen gebruiken.",bupdate:"Browser updaten",bignore:"Negeren",remind:"We zullen u er in {days} dagen aan herinneren.",bnever:"Nooit meer tonen"},i.no=i.nn=i.nb={msg:"Nettleseren din ({brow_name}) er utdatert.",msgmore:"Oppdater nettleseren din for økt sikkerhet, hastighet og den beste opplevelsen på dette nettstedet.",bupdate:"Oppdater nettleser",bignore:"Ignorer",remind:"Du vil få en påminnelse om {days} dager.",bnever:"Aldri vis igjen"},i.pl={msg:"Twoja przeglądarka ({brow_name}) jest nieaktualna.",msgmore:"Zaktualizuj przeglądarkę, by korzystać z tej strony bezpieczniej, szybciej i po prostu sprawniej.",bupdate:"Aktualizuj przeglądarkę",bignore:"Ignoruj",remind:"Przypomnimy o tym za {days} dni.",bnever:"Nie pokazuj więcej"},i.pt={msg:"Seu navegador da web ({brow_name}) está desatualizado.",msgmore:"Atualize seu navegador para ter mais segurança e velocidade, além da melhor experiência neste site.",bupdate:"Atualizar navegador",bignore:"Ignorar",remind:"Você será relembrado em {days} dias.",bnever:"Não mostrar novamente"},i.ro={msg:"Browserul tău ({brow_name}) nu este actualizat.",msgmore:"Actualizează browserul pentru o mai mare siguranță, viteză și cea mai bună experiență pe acest site.",bupdate:"Actualizează browser",bignore:"Ignoră",remind:"Ți se va reaminti peste {days} zile.",bnever:"Nu mai arăta"},i.ru={msg:"Ваш браузер ({brow_name}) устарел.",msgmore:"Обновите ваш браузер для повышения уровня безопасности, скорости и комфорта использования этого сайта.",bupdate:"Обновить браузер",bignore:"Игнорировать",remind:"Вы получите напоминание через {days} дней.",bnever:"Больше не показывать "},i.sk={msg:"Váš internetový prehliadač ({brow_name}) je zastaraný.",msgmore:"Pre väčšiu bezpečnosť, rýchlosť a lepšiu skúsenosť s touto stránkou si aktualizujte svoj prehliadač.",bupdate:"Aktualizovať prehliadač",bignore:"Ignorovať",remind:"Bude vám to pripomenuté o {days} dní.",bnever:"Už nikdy viac neukazovať"},i.sl={msg:"Vaš spletni brskalnik ({brow_name}) je zastarel.",msgmore:"Posodobite svoj brskalnik za dodatno varnost, hitrost in najboljšo izkušnjo na tem spletnem mestu.",bupdate:"Posodobi brskalnik",bignore:"Prezri",remind:"Opomnik boste prejeli čez toliko dni: {days}.",bnever:"Ne prikaži več"},i.sq={msg:"Shfletuesi juaj ({brow_name}) është i vjetruar.",msgmore:"Përditësoni shfletuesin tuaj për më tepër siguri, shpejtësi dhe për më të mirin e funksionimeve në këtë sajt.",bupdate:"Përditëso shfletuesin",bignore:"Shpërfille",remind:"Do t’ju rikujtohet pas {days} ditësh.",bnever:"Mos e shfaq kurrë më"},i.sr={msg:"Vaš pretraživač ({brow_name}) je zastareo.",msgmore:"Ima poznate sigurnosne probleme i najverovatnije neće prikazati sve funkcionalnisti ovog i drugih sajtova.",bupdate:"Nadogradi pretraživač",bignore:"Ignorisi",remind:"Zaboravićete za {days} dana.",bnever:"Ne prikazuj opet"},i.sv={msg:"Din webbläsare ({brow_name}) är föråldrad. ",msgmore:"Uppdatera din webbläsare för mer säkerhet, hastighet och den bästa upplevelsen på den här sajten. ",bupdate:"Uppdatera webbläsaren",bignore:"Ignorera",remind:"Du får en påminnelse om {days} dagar.",bnever:"Visa aldrig igen"},i.th={msg:"เว็บเบราว์เซอร์ของคุณ ({brow_name}) ล้าสมัยแล้ว",msgmore:"อัปเดทเบราว์เซอร์เพื่อเพิ่มความปลอดภัย, ความเร็ว และประสบการณ์ที่ดีที่สุดบนเว็บไซต์นี้",bupdate:"อัปเดทเบราว์เซอร์",bignore:"ข้าม",remind:"คุณจะได้รับการแจ้งเตือนใน {days} วัน",bnever:"ไม่ต้องแสดงอีก"},i.tr={msg:"Web tarayıcınız ({brow_name}) güncel değil.",msgmore:"Daha fazla güvenlik ve hız ile bu sitede en iyi deneyim için tarayıcınızı güncelleyin.",bupdate:"Tarayıcıyı güncelle",bignore:"Yok say",remind:"{days} gün sonra bir hatırlatma alacaksınız.",bnever:"Bir daha gösterme"},i.uk={msg:"Ваш браузер ({brow_name}) застарілий.",msgmore:"Оновіть свій браузер для більшої безпеки, швидкості та повноцінної роботи цього сайту.",bupdate:"Оновити браузер",bignore:"Пропустити",remind:"Ви отримаєте нагадування через {days} днів.",bnever:"Більше не показувати"},i.uz={msg:"Sizning ({brow_name}) veb-brauzeringiz eskirgan",msgmore:"Xavfsizlik, tezkorlik va ushbu sayt imkoniyatlaridan to`liq foydalanish uchun brauzeringizni yangilang.",bupdate:"Brauzeringizni yangilang",bignore:"E’tibor bermaslik",remind:"Sizga {days} kundan so`ng eslatammiz.",bnever:"Hech qachon qayta ko'rsatmang"},i.vi={msg:"Trình duyệt web của bạn ({brow_name}) đã lỗi thời.",msgmore:"Cập nhật trình duyệt của bạn để có thêm bảo mật, tốc độ và trải nghiệm tốt nhất trên trang web này.",bupdate:"Cập nhật trình duyệt",bignore:"Bỏ qua",remind:"Bạn sẽ được nhắc nhở sau {days} ngày.",bnever:"Không bao giờ hiển thị lại"},i.zh={msg:"您的网页浏览器（{brow_name}）已过期。",msgmore:"更新您的浏览器，以便在该网站上获得更安全、更快速和最好的体验。",bupdate:"更新浏览器",bignore:"忽略",remind:"会在{days}天后提醒您。",bnever:"不再显示"},i["zh-tw"]=i["zh-hans-cn"]={msg:"您的網路瀏覽器（{brow_name}）已過舊。",msgmore:"更新您的瀏覽器以獲得更佳的安全性、速度以及在此網站的最佳體驗。",bupdate:"更新瀏覽器",bignore:"忽略",remind:"您將在 {days} 天後收到提醒。",bnever:"不要再顯示"};var o=e["text_for_"+r.n+"_in_"+e.ll]||e["text_for_"+r.n]||e["text_"+e.llfull]||e["text_in_"+e.ll]||e["text_"+e.ll]||e.text;if(i=n=i[e.llfull]||i[e.ll]||i.en,o)if("string"==typeof o)i=n=o;else for(var s in o)n[s]=o[s];n.msg&&(i='<b class="buorg-mainmsg">'+i.msg+'</b> <span class="buorg-moremsg">'+i.msgmore+'</span> <span class="buorg-buttons"><a{up_but}>'+i.bupdate+"</a> <a{ignore_but}>"+i.bignore+"</a></span>");var t="";e.newwindow&&(t=' target="_blank" rel="noopener"');var d=e.div=document.createElement("div");d.id=d.className="buorg";var l="<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/static/img/small/"+r.n+".png);}</style>",u="<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}.buorg-pad { padding: 9px;  line-height: 1.7em; }.buorg-buttons { display: block; text-align: center; }#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}#buorgig { background-color: #edbc68;}@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>";!n.msg||"ar"!=e.ll&&"he"!=e.ll&&"fa"!=e.ll||(u+="<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>"),!n.msg&&i.indexOf&&-1!==i.indexOf("%s")?(i=function(){for(var e=arguments,r=e[0],a=1;a<e.length;++a)r=r.replace(/%s/,e[a]);return r}(i,r.t,' id="buorgul" href="'+e.url+'"'+t),l+="<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}.buorg div { padding:5px 36px 5px 40px; }.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}#buorga{display:block;}@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>",d.innerHTML="<div>"+i+'<div id="buorgclose"><a id="buorga">&times;</a></div></div>'+l,e.addmargin=!0):("bottom"===e.style?u+="<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>":"corner"===e.style?u+="<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>":e.addmargin=!0,i=i.replace("{brow_name}",r.t).replace("{up_but}",' id="buorgul" href="'+e.url+'"'+t).replace("{ignore_but}",' id="buorgig" role="button" tabindex="0"'),d.innerHTML='<div class="buorg-pad" role="status" aria-live="polite"><span class="buorg-icon"> </span>'+i+"</div>"+l+u),e.text=i,e.container?(e.container.appendChild(d),e.addmargin=!1):document.body.insertBefore(d,document.body.firstChild);var m=document.getElementById("buorgul");if(m&&(m.onclick=function(r){d.onclick=null,e.onclick(e),e.noclose||(e.setCookie(e.reminderClosed),e.noclose||(d.style.display="none",e.addmargin&&!1!==e.shift_page_down&&(g.style.marginTop=e.bodymt)))}),o||(d.style.cursor="pointer",d.onclick=function(){e.newwindow?window.open(e.url,"_blank"):window.location.href=e.url,e.setCookie(e.reminderClosed),e.onclick(e)}),e.addmargin&&!1!==e.shift_page_down){var g=document.getElementsByTagName("html")[0]||document.body;e.bodymt=g.style.marginTop,g.style.marginTop=d.clientHeight+"px"}var b=document.getElementById("buorga")||document.getElementById("buorgig");if(b&&(b.onclick=function(r){return d.onclick=null,e.onclose(e),e.addmargin&&!1!==e.shift_page_down&&(g.style.marginTop=e.bodymt),e.setCookie(e.reminderClosed),!e.no_permanent_hide&&n.bnever&&n.remind?(e.div.innerHTML='<div class="buorg-pad"><span class="buorg-moremsg">'+(e.reminderClosed>24?n.remind.replace("{days}",Math.round(e.reminderClosed/24)):"")+'</span> <span class="buorg-buttons"><a id="buorgpermanent" role="button" tabindex="0" href="'+e.url_permanent_hide+'"'+t+">"+n.bnever+"</a></span></div>"+l+u,d.className="buorg buorg-fadeout",document.getElementById("buorgpermanent").onclick=function(r){e.setCookie(8760),e.div.style.display="none"},e.div.style.opacity=0,e.div.style.visibility="hidden",!1):(e.div.style.display="none",!1)},(e.noclose||0==e.reminderClosed)&&b.parentNode.removeChild(b)),e.onshow(e),e.test&&!e.dont_show_debuginfo){var p=document.createElement("script");p.src=e.domain+"/update.test.js",document.body.appendChild(p)}}}}]);
//# sourceMappingURL=411-00f8451f9e3ce5dcf1b3.js.map