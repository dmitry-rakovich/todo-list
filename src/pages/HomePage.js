const HomePage = () => {
    return (
        <div className="home_page">
        <h1>Home Page</h1>
        <img src="https://www.clipartmax.com/png/middle/419-4192165_png-file-svg-shopping-list-icon-png.png" width={84} height={106}></img>
        <ul>
            <span>Реализованные возможности:</span>
            <li>Получение списка дел</li>
            <li>Добавление дела</li>
            <li>Удаление дела</li>
            <li>Пагинация без перезагрузки</li>
        </ul>
        <ul>
            <span>Не реализовано:</span>
            <li>Редактирование дела</li>
        </ul>
        </div>
    )
}

export {HomePage}