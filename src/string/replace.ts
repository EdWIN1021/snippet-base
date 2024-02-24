let queryStr = "age gte 25 and height lt 6";

queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

console.log(queryStr);
