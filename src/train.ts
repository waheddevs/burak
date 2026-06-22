/* U-TASK

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsin.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

*/

// Masalaning yechimi:

function sumOdds(num: number): number {
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log(sumOdds(5))
console.log(sumOdds(8))




//=========================================================================================================================================

/* T-TASK

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

*/

// Masalaning yechimi:

/*
function mergeSortedArrays(nums: number[] , numbers: number[]): number[] {
    return [...nums, ...numbers].sort(( a, b ) => a - b );
}

console.log(mergeSortedArrays([ 0, 5, 15, 18 ], [ 1, 2, 6, 10 ]))
*/




//=========================================================================================================================================

/* S-TASK

Shunday function yozing, u numberlardan tashkil topgan list qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missing_number([3, 0, 1]) return 2

*/

// Masalaning yechimi:

/*
function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, x) => acc + x, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([5, 0, 3]));
console.log(missingNumber([0, 4, 7]));
*/




//=========================================================================================================================================

/* R-TASK

Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4;

*/

// Masalaning yechimi:

/*
function calculate(expression: string): number {
    const [a, b] = expression.split("+").map(Number);
    return a + b;
}

console.log(calculate("4+5"));
console.log(calculate("11+35"));
*/



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

/* Requests:

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

/*
VALIDATIONS

    Frontend validation
    Backend validation
    Database validation

*/