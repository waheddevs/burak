/* TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib birinchisi object, ikkinchisi string bo'lsin. Agar qabul qilinayotgan ikkinchi string, objectning biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

*/

// Masalaning yechimi:

function hasProperty(obj: object, key: string): boolean {
    return key in obj;
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));  // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "color"));  // false
console.log(hasProperty({ age: 25, city: "Tashkent" }, "age"));   // true
console.log(hasProperty({}, "name"));                              // false












//=========================================================================================================================================

/* Project Standarts
- Logging standarts
- Naming standarts
    function, method, variable => CAMEL case      goHome
    class => PASCAL case                          MemberService
    folder, file => KEBAB case
    css => SNAKE case                             buttton_style
- Error handling

*/

/*

Traditional API
Rest API
GraphQL API

*/

/*

    Tradiditional Frontend development   =>   BSSR  [Admin]   (EJS)
    Modern Frontend development          =>   SPA   [User]    (REACT)

*/