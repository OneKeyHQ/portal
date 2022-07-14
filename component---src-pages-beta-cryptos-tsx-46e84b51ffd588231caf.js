"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[826],{2561:function(t,n,o){o.r(n),o.d(n,{default:function(){return D}});var e=o(5414),i=o(9147),s=o(9311),l=o(8122),r=o(3431),a=o(6149),c=o(5216),p=o(5097),u={BTC:{link:"https://bitcoin.org/",symbol:"BTC",name:"Bitcoin"},ETH:{link:"https://ethereum.org/",symbol:"ETH",name:"Ethereum"},BCH:{link:"https://www.bitcoincash.org/",symbol:"BCH",name:"Bitcoin Cash"},BTG:{link:"https://bitcoingold.org/",symbol:"BTG",name:"Bitcoin Gold"},DASH:{link:"https://www.dash.org/",symbol:"DASH",name:"Dash"},USDT:{link:"https://tether.to",symbol:"USDT",name:"Tether"},DOGE:{link:"http://dogecoin.com/",symbol:"DOGE",name:"Dogecoin"},DGB:{link:"https://digibyte.org/",symbol:"DGB",name:"Digibyte"},LTC:{link:"https://litecoin.org/",symbol:"LTC",name:"Litecoin"},VTC:{link:"http://vertcoin.org/",symbol:"VTC",name:"Vertcoin"},ZEC:{link:"https://z.cash/",symbol:"ZEC",name:"Zcash"},HECO:{link:"https://www.hecochain.com/",symbol:"HECO",name:"Heco"},BSC:{link:"https://www.binance.org/",symbol:"BSC",name:"Binance Coin"},OKT:{link:"https://www.okex.com/okexchain",symbol:"OKT",name:"OKEX"},POLYGON:{link:"https://polygon.technology/",symbol:"POLYGON",name:"Polygon"},FANTOM:{link:"https://fantom.foundation/",symbol:"FANTOM",name:"Fantom"},XDAI:{link:"https://www.xdaichain.com/",symbol:"XDAI",name:"XDAI"},STARCOIN:{link:"https://starcoin.org/",symbol:"STARCOIN",name:"Starcoin"},SOLANA:{link:"https://solana.com/",symbol:"SOLANA",name:"Solana"},CONFLUX:{link:"https://confluxnetwork.org/",symbol:"CONFLUX",name:"Conflux"},ALGORAND:{link:"https://www.algorand.com/",symbol:"ALGORAND",name:"Algorand"}},m=[u.BTC,u.DASH,u.HECO],h=[u.BTC,u.DASH,u.HECO,u.ETH],d=h,y=[u.BTC,u.DASH,u.HECO,u.ETH,u.BCH,u.BTG],g=y,b=Object.values(u).map((function(t){return{currency:t,support:{app:m.includes(t),classic:h.includes(t),mini:d.includes(t),touch:y.includes(t),pro:g.includes(t)}}})).filter((function(t){return t.support.app||t.support.classic||t.support.mini||t.support.touch||t.support.pro}));var Z={name:"1lz3ji5",styles:"width:100%;border-spacing:0;border-collapse:collapse"},x={name:"12x64ox",styles:"width:20%"},C={name:"12x64ox",styles:"width:20%"},k={name:"12x64ox",styles:"width:20%"},w={name:"59yqnd",styles:':before{content:"";display:block;height:12px;}'},B={name:"aetk3e",styles:"height:80px"},A={name:"2qga7i",styles:"text-align:right"},O=function(t){var n=t.children,o=(0,a.a)(),e={thead:{coins:"COINS",app:"APP",classicAndMini:"Classic & Mini",touchAndPro:"Touch & Pro"},suggestList:b},s="1px solid "+o.colors.test200;return(0,r.tZ)(i.Box,{xs:{borderTop:s,borderBottom:s,paddingLeft:24,paddingRight:24,paddingBottom:12,textAlign:"left"},m:{borderLeft:s,borderRight:s,borderRadius:24}},(0,r.tZ)("table",{css:Z},(0,r.tZ)("thead",null,(0,r.tZ)("tr",{css:(0,r.iv)(Object.assign({},o.text.medium200,{height:76,lineHeight:"76px",position:"relative",borderBottom:s}),"","","","")},(0,r.tZ)("th",null,e.thead.coins),(0,r.tZ)("th",{css:x},e.thead.app),(0,r.tZ)("th",{css:C},e.thead.classicAndMini),(0,r.tZ)("th",{css:k},e.thead.touchAndPro),(0,r.tZ)("th",null," "))),(0,r.tZ)("tbody",{css:w},e.suggestList.map((function(t){return(0,r.tZ)("tr",{css:B,key:t.currency.name},(0,r.tZ)("td",null,(0,r.tZ)(i.Flex,{xs:{alignItems:"center"}},(0,r.tZ)(i.Img,{xs:{width:48,height:48,borderRadius:"50%",overflow:"hidden"},src:(0,c.s)("/cryptocurrency-icons/128/color/"+t.currency.symbol.toLowerCase()+".png")}),(0,r.tZ)(i.Box,{xs:{paddingLeft:12}},(0,r.tZ)(i.Box,{xs:o.text.medium400},t.currency.symbol),(0,r.tZ)(i.Box,{xs:Object.assign({},o.text.medium100,{color:o.colors.test300})},t.currency.name)))),(0,r.tZ)("td",null,(0,r.tZ)(p.J,{isSupported:t.support.app})),(0,r.tZ)("td",null,(0,r.tZ)(p.J,{isSupported:t.support.classic&&t.support.mini})),(0,r.tZ)("td",null,(0,r.tZ)(p.J,{isSupported:t.support.touch&&t.support.pro})),(0,r.tZ)("td",{css:A},(0,r.tZ)(i.Link,{to:t.currency.link},(0,r.tZ)(i.Flex,{xs:Object.assign({justifyContent:"flex-end",alignItems:"center",color:o.colors.brandAlt400},o.text.medium300)},(0,r.tZ)(i.Span,null,"Link"),(0,r.tZ)(i.ArrowRightIcon,{color:o.colors.brandAlt400,width:24,height:24})))))})))),n)},f=function(t){var n=t.children,o=(0,r.tZ)(O,null);return(0,r.tZ)(i.Box,null,(0,r.tZ)(i.OnlyDisplay,{m:!0,l:!0,xl:!0,xxl:!0},(0,r.tZ)(l.W2,null,o)),(0,r.tZ)(i.OnlyDisplay,{xs:!0,s:!0},(0,r.tZ)(i.Box,{xs:{overflow:"auto"}},(0,r.tZ)(i.Box,{xs:{minWidth:600}},o))),n)},T=o(8521);var S=function(t){var n=t.children,o={mainTitle:{title:"OneKey Crypto Assets",subtitle:"Support List",description:"If you can't find the coin you're looking for, feel free to contact hi@onekey.so to communicate with us."}};return(0,r.tZ)(i.Box,{xs:{textAlign:"center",paddingTop:"12vh",paddingBottom:"6vh"}},(0,r.tZ)(T.t,o.mainTitle),n)},D=function(t){var n=t.children;return(0,r.tZ)(i.Box,null,(0,r.tZ)(e.Helmet,null,(0,r.tZ)("title",null,"Cryptos")),(0,r.tZ)(s.W_,null),(0,r.tZ)(i.Main,null,(0,r.tZ)(i.Container,null,(0,r.tZ)(S,null)),(0,r.tZ)(f,null),(0,r.tZ)(i.Container,null,(0,r.tZ)(i.Box,{xs:{paddingTop:80,paddingBottom:80}},(0,r.tZ)(s.Mb,null))),n),(0,r.tZ)(s.WA,{isShowEmailSubscribe:!1,isShowMediaLinks:!1}))}}}]);
//# sourceMappingURL=component---src-pages-beta-cryptos-tsx-46e84b51ffd588231caf.js.map