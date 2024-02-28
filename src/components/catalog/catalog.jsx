import React from 'react'
import '../catalog/catalog.css'
import { store } from '../../app/store'
import Card from '../card/card'

export default function Catalog() {
    return (

        <div className="catalog">
            <div className="catalog-content">
                <div className="pagin">
                    <a href="" className='paginA'>Главная</a> \
                    <a href="" className='paginA'>Каталог</a>
                </div>

                <div className="catalog-inform">
                    <div className="catalog-menu">
                        <a href="" className="menu-link">Всё</a>
                        <a href="" className="menu-link">Топ</a>
                        <a href="" className="menu-link">Низ</a>
                        <a href="" className="menu-link">Обувь</a>
                    </div>

                    <div className="catalog-inform-blog">
                        <div className="catalog-blog">
                            {
                                store.products.map((card, index) => {
                                    return (
                                        <Card key={index} {...card} />

                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

