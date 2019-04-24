import React from 'react';

export const Content = () => {
    return (
        <div className = 'content'>
            <div className = 'profile'>
                <img
                    alt = 'avatar'
                    className = 'avatar'
                    src = { avatar }
                />
                <div className = 'main'>
                    <span className = 'nickname'>nasa</span>
                    <div className = 'stats'>
                        <div>
                            <span>2,436&nbsp;</span>
                            posts
                        </div>
                        <div>
                            <span>34,9m&nbsp;</span>
                            followers
                        </div>
                        <div>
                            <span>70&nbsp;</span>
                            following
                        </div>
                    </div>
                    <span className = 'name'>NASA</span>
                </div>
            </div>
            <div className = 'images'>{imagesJSX}</div>
        </div>
    );
};
