function n() {
  return {
    type: "component",
    resolve: (e) => {
      if (e.match(/^(Vin[A-Z]|vin-[a-z])/)) {
        const o = e.slice(3).replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
        return {
          name: e,
          from: `@vingogo/uni-ui/lib/components/${o}/index.vue`
        };
      }
    }
  };
}
export {
  n as default
};
