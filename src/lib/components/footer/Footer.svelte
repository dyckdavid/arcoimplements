<script>
        import { IconBrandX, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-svelte';
        import logo from "$lib/images/logo.png";

</script>

<footer class="bg-gray-800 text-white">
    <div class="container mx-auto px-4 py-8 md:flex md:justify-between md:items-start">
      
      
      <div class="mb-8 md:mb-0">
        <img src={logo} alt="Arco Implements Logo" class="h-40 mb-3">
        <p class="text-xl font-semibold">Arco Implements</p>
      </div>
      
     
      <div class="space-y-6 w-auto md:w-60">
        
        <div class="bg-gray-800 p-4 rounded-lg">
          <p class="font-semibold text-lg mb-3">Quick Links</p>
          <ul class="space-y-2"> 
            <li><a href="/" class="hover:text-gray-400 transition-colors">Home</a></li>
            <li><a href="/products" class="hover:text-gray-400 transition-colors">Products</a></li>
            <li><a href="/contact" class="hover:text-gray-400 transition-colors">Contact</a></li>
            <li><a href="/about" class="hover:text-gray-400 transition-colors">About</a></li>
          </ul>
        </div>
  
        
        <div class="bg-gray-700 p-4 rounded-lg">
          <p class="font-semibold text-lg mb-3">Follow Us</p>
          <div class="flex">
            
            <a href="https://x.com/estufaselarco?s=11&t=qPAIaImaGQFpGgE-xRfJYQ" class="hover:text-gray-400 transition-colors mx-2 ">
              <IconBrandX class="w-4 h-4"  />
            </a>
            <a href="https://www.facebook.com/share/DCVvFX3nnoyu6iiz/?mibextid=JRoKGi" class="hover:text-gray-400 transition-colors mx-2">
                <IconBrandFacebook class="w-4 h-4"  />
            </a>
            <a href="https://youtube.com/@daviddyck04?si=iCOKhBT5oNvAA738" class="hover:text-gray-400 transition-colors mx-2">
                <IconBrandYoutube class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  
    
    <div class="text-center p-4 text-sm md:text-base">
      <p>© {new Date().getFullYear()} Arco Implements</p>
    </div>
  </footer>