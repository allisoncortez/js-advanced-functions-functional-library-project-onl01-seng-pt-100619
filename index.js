const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array,alert) {
      for (const element in array){
        alert(array[element])
      }
      return array
    },

    map: function(collection, callback) {
      // 1) successfully returns a correctly populated array
      // ✓ does not modify the original array
      // 2) successfully returns a correctly populated array from modified object values
      // ✓ does not modify the original object
      collection = Object.values(collection)
      const newArray = []

      for (let i = 0; i < collection.length; i++){
        newArray.push(callback(collection[i]))
      }
      return newArray

    },

    reduce: function(collection, callback, acc) {
      // acc = callback(acc, collection[i], collection)
      let total = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1

      for (;i < collection.length; i++){
        total = callback(total, collection[i], collection)
      }
      return total;
    },

    find: function(collection, predicate){
      for(let i = 0; i < collection.length; i++){
      if (predicate(collection[i])) return collection[i]
      }
      return undefined
    },

    filter: function(collection, predicate){
      const newArray = []
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])) newArray.push(collection[i])
      }
      return newArray
    },

    size: function(collection){
      return collection.length 
    }


    // functions: function() {

    // },
  }
})()

fi.libraryMethod()
