import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import styles from "./Project.module.css"
import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'



export const Project = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        {/*<div className={styles.scrollButton} onClick={scrollLeft}>◀</div>*/}

        <Swiper
            effect={'coverflow'}
            grabCursor ={ true }
            centeredSlides = {true}
            loop = {true}
            slidesPerView = {3}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Autoplay, EffectCoverflow, Navigation]}
            className={styles.projects}
        >
            {
                projects.map((project, id)=>{

                    return (
                      <SwiperSlide key={id}>
                        <ProjectCard key={id} project={project}/>
                      </SwiperSlide>

                    )

                })
            }
        </Swiper>
       
        {/*<div className={styles.scrollButton} onClick={scrollRight}>▶</div>*/}
    </section>
  )
}
