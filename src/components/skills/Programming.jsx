import React from 'react'
import { HiCheckBadge } from "react-icons/hi2";

const Programming = () => {
  return (
    <div className="skills__content">
            <h3 className="skills__title">Programming languages</h3>
            <div className="skills__box">
                <div className="skills__group1">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">C++</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Programming