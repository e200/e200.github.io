window.onload = function()
{
    $menuBtn = document.getElementsByClassName("umburg").item(0);

    $menuBtn.onclick = function(b)
    {
        b.preventDefault();
        
        $class="umburg-active";

        if(!$menuBtn.classList.contains($class)) {
            $menuBtn.classList.add($class)
        }
        else {
            $menuBtn.classList.remove($class)
        }
    }
};
