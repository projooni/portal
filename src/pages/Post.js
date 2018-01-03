/**
 * Created by SDS on 2018-01-03.
 */
import React from 'react';

const Post = ({match}) => {
    return(
        <div>
            포스트 {match.params.id}
        </div>
    );
};

export default Post;