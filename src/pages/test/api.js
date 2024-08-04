// pages/api/items.js
export default async function handler(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
  
    // Подключение к базе данных и получение данных с пагинацией
    const items = await getItemsFromDatabase(offset, limit);
    const totalItems = await countTotalItems();
  
    res.status(200).json({
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
    });
  }
  