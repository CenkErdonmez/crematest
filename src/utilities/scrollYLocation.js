export const scrollYLocation = (setScrollY) => {
    const handleScroll = () => {
        if(typeof window !== "undefined") {
            setScrollY(window.scrollY)
        }
    }

    handleScroll()

    if(typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll)
    }
    
    return () => {
        if(typeof  window !== "undefined") {
            window.removeEventListener("scroll", handleScroll)
        }
    }

}