/* R-TASK

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;

*/

// Masalaning yechimi:

function calculate(expression: string): number {
    const [a, b] = expression.split("+").map(Number);
    return a + b;
}

console.log(calculate("4+5"));
console.log(calculate("11+35"));




//=========================================================================================================================================

/* TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib birinchisi object, ikkinchisi string bo'lsin. Agar qabul qilinayotgan ikkinchi string, objectning biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

*/

// Masalaning yechimi:

/*
function hasProperty(obj: object, key: string): boolean {
    return key in obj;
}

console.log(hasProperty({ name: "MERS", model: "350" }, "model"));
console.log(hasProperty({ name: "CHEVROLET", model: "COBALT" }, "model"));
console.log(hasProperty({ age: 25, city: "Jizzakh" }, "age"));
*/


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

/*

Cookies
    request join
    self destroy
*/