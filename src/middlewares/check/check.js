import model from "./model.js";

export default async (req,res,next) =>{
    try {
        let { Table_Chapter_id } = req.params;
    
        // Agar `Table_Chapter_id` 1 ga teng bo'lsa, shunchaki keyingi middlewarega o'tiladi
        if (Table_Chapter_id == 1) {
            console.log('Table_Chapter_id = 1. Tekshirilmaydi.');
            return next(); // Tekshirishlarni o'tkazib yuborib, keyingi middlewarega o'tadi
        }
    
        // Table_Chapter_id ni o'zgartirish (faqat 1 dan katta bo'lsa)
        if (Table_Chapter_id > 1) {
            console.log(`Table_Chapter_id oldingi chapterga o'zgartirildi: ${Table_Chapter_id} -> ${Table_Chapter_id - 1}`);
            Table_Chapter_id = Table_Chapter_id - 1;
        }
    
        // Ma'lumotlarni olish
        console.log(`Ma'lumotlar olinmoqda, Table_Chapter_id: ${Table_Chapter_id}`);
        const answord = await model.GET_quesion({ Table_Chapter_id: Table_Chapter_id });
    
        // Javoblar mavjudligini tekshirish
        if (!answord.length) {
            console.error('Javob topilmadi yoki ballingiz kam');
            return next(new Error('Javob topilmadi yoki ballingiz kam'));
        }
        console.log(`Olingan javoblar: ${JSON.stringify(answord)}`);
    
        // Javoblarni filterlash: `user_id` va `ball` shartlari bajariladi
        const filtred = answord.filter((e) => e.user_id == req.userId && e.ball >= 70);
        console.log(`Filterlangan javoblar: ${JSON.stringify(filtred)}`);
    
        // Birinchi mos bo'lgan obyektni ajratish
        const firstValidQuestion = filtred.find((e) => e.Table_Chapter_id === e.Questions_id);
    
        // Qolgan obyektlarni ajratish (birinchi obyektni chiqarib tashlash)
        const remainingQuestions = filtred.filter((e) => e !== firstValidQuestion);
    
        console.log(`Birinci obyekt: ${JSON.stringify(firstValidQuestion)}`);
        console.log(`Qolgan obyektlar: ${JSON.stringify(remainingQuestions)}`);
    
        // Agar birinchi obyekt topilmasa yoki qolgan obyektlar bo'lmasa, xatolikni qaytarish
        if (!firstValidQuestion) {
            console.error('Mos javob topilmadi yoki cheklov bajarilmadi');
            return next(new Error('Mos javob topilmadi yoki cheklov bajarilmadi'));
        }
    
        if (!remainingQuestions.length) {
            console.error('Qolgan obyektlar yo\'q');
            return next(new Error('Qolgan obyektlar yo\'q'));
        }
    
        // Qolgan obyektlar bilan ishlash
        remainingQuestions.forEach((question) => {
            console.log(`Qolgan obyektni qayta ishlash: ${JSON.stringify(question)}`);
            // Qo'shimcha logika qo'shishingiz mumkin
        });
    
        console.log('Hamma shartlar bajarildi, keyingi middlewarega o\'tildi.');
        return next();
    
    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
        next(error);
    }
    
    

   
}
