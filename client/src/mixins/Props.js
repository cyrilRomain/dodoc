export default {
  computed: {},
  methods: {
    extractArr(folder_arr, prop) {
      return folder_arr
        .reduce((acc, f) => {
          const p = f[prop];
          if (p)
            if (typeof p === "string") acc.push(p);
            else if (Array.isArray(p)) acc = acc.concat(p);
          return acc;
        }, [])
        .filter((value, index, array) => array.indexOf(value) === index);
    },
  },
};
