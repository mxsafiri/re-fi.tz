# Re-fi Tanzania - Minimalist Landing 🌍

A minimalist glass morphism landing page for Re-fi Tanzania - Building a regenerative finance hub for African communities.

## Features ✨

- **Minimalist Design**: Clean, simple interface with glass morphism effects
- **Animated Background**: Your images transition smoothly as the background
- **Glass Morphism**: Beautiful frosted glass effect on buttons with 3D hover animations
- **Fully Responsive**: Works perfectly on all devices and screen sizes
- **3D Interactions**: Buttons tilt and transform based on mouse movement
- **Touch Optimized**: Smooth interactions for mobile and tablet devices
- **Keyboard Navigation**: Full accessibility with keyboard controls (Arrow Up/Down)

## Project Structure 📁

```
publcs/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/
    └── images/         # Place your images here
        ├── image1.jpg
        ├── image2.jpg
        └── image3.jpg
```

## Quick Start 🚀

1. **Add Your Images**
   - Place 3 images in the `assets/images/` folder
   - Name them: `image1.jpg`, `image2.jpg`, `image3.jpg`
   - These will become your animated background
   - Recommended: High-quality, landscape images (1920x1080px or larger)
   - Supported formats: JPG, PNG, WebP

2. **Your Links Are Already Configured!**
   - NedaPay: https://nedapay.xyz/
   - Jukumu: https://jukumu.netlify.app/
   - Encointer Explorer: https://explorer.encointer.org/

3. **Customize (Optional)**
   - Open `index.html` to change button text or URLs
   - Edit brand text in top corner
   - Adjust colors in `styles.css`

4. **View Your Landing Page**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Then open: http://localhost:8000
   ```

## Customization Guide 🎨

### Add More Buttons
To add another application button, copy this in `index.html`:
```html
<a href="https://your-new-app.com" class="glass-button" target="_blank" rel="noopener">
    <span class="button-text">Your App Name</span>
</a>
```

### Change Background Overlay
Adjust the glass overlay opacity in `styles.css`:
```css
.glass-overlay {
    background: rgba(15, 23, 42, 0.3);  /* Change 0.3 to 0.5 for darker overlay */
    backdrop-filter: blur(8px);          /* Increase blur for more frosted effect */
}
```

### Adjust Button Glass Effect
Modify button transparency in `styles.css`:
```css
.glass-button {
    background: rgba(255, 255, 255, 0.1);  /* Change opacity for more/less transparency */
    border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Change Brand Text
Edit top corner text in `index.html`:
```html
<div class="brand-text">
    <h1>Your Brand Name</h1>
    <p>Your Tagline</p>
</div>
```

## Animations Included 🎬

- **Background Image Slideshow**: 3 images transition smoothly every 6 seconds with zoom effect
- **Fade In**: Brand text and buttons fade in on page load
- **Glass Button Hover**: Buttons lift up, scale, and show shimmer effect on hover
- **3D Tilt Effect**: Buttons tilt based on mouse position for 3D depth
- **Touch Animations**: Optimized press effects for mobile devices
- **Smooth Transitions**: All animations use hardware acceleration for 60fps performance

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips ⚡

1. **Optimize Images**:
   - Use WebP format for better compression
   - Compress images before uploading
   - Recommended size: under 500KB per image

2. **Enable Caching**: 
   - Configure your web server to cache static assets

3. **Use a CDN**:
   - Host images on a CDN for faster loading

## Deployment Options 🚢

### GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Go to Settings → Pages
4. Select main branch as source

### Netlify
1. Drag and drop the `publcs` folder to Netlify
2. Your site will be live instantly

### Vercel
```bash
npm i -g vercel
vercel
```

### Traditional Hosting
- Upload all files to your web server's public directory
- Ensure `index.html` is in the root

## Troubleshooting 🔧

**Background images not showing?**
- Ensure 3 images are in `assets/images/` folder named: `image1.jpg`, `image2.jpg`, `image3.jpg`
- Check file paths in `styles.css` (lines 40-51)
- Clear browser cache and reload

**Blur effect not working?**
- Use modern browser (Chrome, Firefox, Safari, Edge)
- Check if `backdrop-filter` is supported in your browser

**3D effects not smooth?**
- Enable hardware acceleration in browser settings
- Reduce number of background images if needed
- Check browser console for performance warnings

## Updates & Maintenance 🔄

To update content:
1. **Text**: Edit `index.html`
2. **Styling**: Edit `styles.css`
3. **Functionality**: Edit `script.js`

## License 📄

This project is open source and available for use by Re-fi Tanzania.

## Contact & Support 💬

For issues or questions about this landing page, please contact your development team.

---

**Built with ❤️ for Re-fi Tanzania**
*Creating regenerative finance solutions for African communities*
