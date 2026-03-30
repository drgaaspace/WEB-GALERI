     //1.Mencari semua item foto di halaman
      const animatedItems =
      document.querySelectorAll('.item')
      //1.Memdesain penjaga (intersection observer)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        //jika foto sudah terlihat di layar
        if (entry.isIntersecting){
          //tambahkan class 'animate-in' agar opacity berubah jadi 1
          entry.target.classList.add('animate-in');
        }else{
          entry.target.classList.remove('animate-in');
        }
      });
      }, {
        //pemicu aktif saat 20% bagian foto sudah masuk ke layar hp 
        threshold: 0.06
      });
        
      //3. Suruh pengamat tadi mengawasi setiap item foto satu per satu 
      animatedItems.forEach(item => {
        observer.observe(item);
      
      });
