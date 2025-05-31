import * as React from "react";

export default function Image ({src, alt, className})  {
    return <img className={className} src={`${process.env.PUBLIC_URL}${src}`} alt={alt}></img>
}