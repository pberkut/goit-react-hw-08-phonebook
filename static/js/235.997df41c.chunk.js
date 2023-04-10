"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[235],{2392:function(e,n,r){r.d(n,{NI:function(){return N},NJ:function(){return I},e:function(){return Z}});var i=r(1413),a=r(4925),t=r(9439),l=r(9886),o=r(4591),d=r(7872),s=r(9219),u=r(2996),c=r(1999),m=r(6992),v=r(2791),f=r(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],g=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,t.Z)(g,2),x=b[0],Z=b[1],y=(0,l.k)({strict:!1,name:"FormControlContext"}),k=(0,t.Z)(y,2),_=k[0],I=k[1];var N=(0,d.G)((function(e,n){var r=(0,s.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,d=e.isDisabled,s=e.isReadOnly,u=(0,a.Z)(e,p),c=(0,v.useId)(),f=n||"field-".concat(c),h="".concat(f,"-label"),g="".concat(f,"-feedback"),b="".concat(f,"-helptext"),x=(0,v.useState)(!1),Z=(0,t.Z)(x,2),y=Z[0],k=Z[1],_=(0,v.useState)(!1),I=(0,t.Z)(_,2),N=I[0],R=I[1],q=(0,v.useState)(!1),F=(0,t.Z)(q,2),j=F[0],C=F[1],B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&R(!0)}))})}),[b]),P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(j),"data-disabled":(0,m.PB)(d),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(s),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,d,j,l,s,h]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},e),{},{ref:(0,o.lq)(n,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[g]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!s,isDisabled:!!d,isFocused:!!j,onFocus:function(){return C(!0)},onBlur:function(){return C(!1)},hasFeedbackText:y,setHasFeedbackText:k,hasHelpText:N,setHasHelpText:R,id:f,labelId:h,feedbackId:g,helpTextId:b,htmlProps:u,getHelpTextProps:B,getErrorMessageProps:T,getRootProps:S,getLabelProps:P,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),d=l.getRootProps,g=(l.htmlProps,(0,a.Z)(l,h)),b=(0,m.cx)("chakra-form-control",e.className);return(0,f.jsx)(_,{value:g,children:(0,f.jsx)(x,{value:r,children:(0,f.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},d({},n)),{},{className:b,__css:r.container}))})})}));N.displayName="FormControl",(0,d.G)((function(e,n){var r=I(),a=Z(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:t}))})).displayName="FormHelperText"},8208:function(e,n,r){r.d(n,{l:function(){return v}});var i=r(1413),a=r(4925),t=r(2392),l=r(7872),o=r(9219),d=r(2996),s=r(1999),u=r(6992),c=r(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,l.G)((function(e,n){var r,l=(0,o.mq)("FormLabel",e),v=(0,d.Lr)(e),p=(v.className,v.children),h=v.requiredIndicator,g=void 0===h?(0,c.jsx)(f,{}):h,b=v.optionalIndicator,x=void 0===b?null:b,Z=(0,a.Z)(v,m),y=(0,t.NJ)(),k=null!=(r=null==y?void 0:y.getLabelProps(Z,n))?r:(0,i.Z)({ref:n},Z);return(0,c.jsxs)(s.m.label,(0,i.Z)((0,i.Z)({},k),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},l),children:[p,(null==y?void 0:y.isRequired)?g:x]}))}));v.displayName="FormLabel";var f=(0,l.G)((function(e,n){var r=(0,t.NJ)(),a=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(s.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:l}))}));f.displayName="RequiredIndicator"},9140:function(e,n,r){r.d(n,{I:function(){return h}});var i=r(1413),a=r(4925),t=r(2392),l=r(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function s(e){var n=function(e){var n,r,o,s=(0,t.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,f=e.isRequired,p=e.isInvalid,h=e.isReadOnly,g=e.isDisabled,b=e.onFocus,x=e.onBlur,Z=(0,a.Z)(e,d),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&y.push(s.feedbackId);(null==s?void 0:s.hasHelpText)&&y.push(s.helpTextId);return(0,i.Z)((0,i.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==s?void 0:s.id,isDisabled:null!=(n=null!=c?c:g)?n:null==s?void 0:s.isDisabled,isReadOnly:null!=(r=null!=m?m:h)?r:null==s?void 0:s.isReadOnly,isRequired:null!=(o=null!=v?v:f)?o:null==s?void 0:s.isRequired,isInvalid:null!=p?p:null==s?void 0:s.isInvalid,onFocus:(0,l.v0)(null==s?void 0:s.onFocus,b),onBlur:(0,l.v0)(null==s?void 0:s.onBlur,x)})}(e),r=n.isDisabled,s=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,a.Z)(n,o);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(s),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=r(7872),c=r(9219),m=r(2996),v=r(1999),f=r(184),p=["htmlSize"],h=(0,u.G)((function(e,n){var r=e.htmlSize,t=(0,a.Z)(e,p),o=(0,c.jC)("Input",t),d=s((0,m.Lr)(t)),u=(0,l.cx)("chakra-input",e.className);return(0,f.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:r},d),{},{__css:o.field,ref:n,className:u}))}));h.displayName="Input",h.id="Input"},1213:function(e,n,r){r.d(n,{g:function(){return g}});var i=r(1413),a=r(4942),t=r(4925),l=r(1999),o=r(184),d=function(e){return(0,o.jsx)(l.m.div,(0,i.Z)((0,i.Z)({className:"chakra-stack__item"},e),{},{__css:(0,i.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};d.displayName="StackItem";var s=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function u(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,s.Kn)(e)?Object.keys(e).reduce((function(r,i){return r[i]=n(e[i]),r}),{}):null!=e?n(e):null}var c="& > *:not(style) ~ *:not(style)";var m=r(7872),v=r(7200),f=r(2791),p=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],h=(0,m.G)((function(e,n){var r=e.isInline,m=e.direction,h=e.align,g=e.justify,b=e.spacing,x=void 0===b?"0.5rem":b,Z=e.wrap,y=e.children,k=e.divider,_=e.className,I=e.shouldWrapChildren,N=(0,t.Z)(e,p),R=r?"row":null!=m?m:"column",q=(0,f.useMemo)((function(){return function(e){var n=e.spacing,r=e.direction,i={column:{marginTop:n,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:n},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:n,marginStart:0},"row-reverse":{marginTop:0,marginEnd:n,marginBottom:0,marginStart:0}};return(0,a.Z)({flexDirection:r},c,u(r,(function(e){return i[e]})))}({direction:R,spacing:x})}),[R,x]),F=(0,f.useMemo)((function(){return function(e){var n=e.spacing,r=e.direction,i={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":u(r,(function(e){return i[e]}))}}({spacing:x,direction:R})}),[x,R]),j=!!k,C=!I&&!j,B=(0,f.useMemo)((function(){var e=(0,v.W)(y);return C?e:e.map((function(n,r){var i="undefined"!==typeof n.key?n.key:r,a=r+1===e.length,t=I?(0,o.jsx)(d,{children:n},i):n;if(!j)return t;var l=(0,f.cloneElement)(k,{__css:F}),s=a?null:l;return(0,o.jsxs)(f.Fragment,{children:[t,s]},i)}))}),[k,F,j,C,I,y]),P=(0,s.cx)("chakra-stack",_);return(0,o.jsx)(l.m.div,(0,i.Z)((0,i.Z)({ref:n,display:"flex",alignItems:h,justifyContent:g,flexDirection:q.flexDirection,flexWrap:Z,className:P,__css:j?{}:(0,a.Z)({},c,q[c])},N),{},{children:B}))}));h.displayName="Stack";var g=(0,m.G)((function(e,n){return(0,o.jsx)(h,(0,i.Z)((0,i.Z)({align:"center"},e),{},{direction:"column",ref:n}))}));g.displayName="VStack"},7200:function(e,n,r){r.d(n,{W:function(){return a}});var i=r(2791);function a(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}}}]);
//# sourceMappingURL=235.997df41c.chunk.js.map