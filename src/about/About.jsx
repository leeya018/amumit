import React, { Component } from 'react';
import './index.css';
import shoshPerfil from '../img/shosh_perfil.jpg';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div>

                    <div>
                        <span>שלום לכולם </span><br />
                        <span>שמי שוש ואני בדרך שלי להצלחה</span><br />
                        <span>באתר זה תוכלו למצוא תמונות מרהיבות שאני ציירתי בעצמי</span><br />
                        <span>כל יום האתר מתעדכן בתמנות חדשות </span><br />
                        <span>ניתן לעדיין ואף לרכוש יותר מתמונה אחת ומי שמבין באומנות בטח מתפלא למה המחירים כל כך זולים</span><br />
                        <span>אז אני אגיד לכם</span><br />
                        <span>בעולם של היום לא כולם יכולים להרשות לעצמם אומנות כיוון שמאז ומתמיד אומנות נועלו לאלו שיושבים טוב</span><br />
                        <span>אני החלטתי על מהפך</span><br />
                        <span>הגיע הזמן שגם לכן יהייה תמונה מהממת על הקיר </span><br />
                        <span>גם אם אתה לא רוטשילד </span><br />
                        <span>אז תעשה לעצמך טובה ותקנה תמונה</span><br />
                        <span>רק בזריז כי בסוף לא ישאר לכולם</span><br />
                    </div>
                    <div>
                        <img className="about-foto" src={shoshPerfil} alt="shosh" />
                    </div>


                </div>

            </div>
        );
    }
}

export default About;