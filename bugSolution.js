```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

function MyComponent() {
  const router = useRouter(); // Initialize useRouter

  const handleAboutClick = () => {
    router.push('/about'); // Use router.push for navigation
  };

  return (
    <div>
      {/* Using next/navigation for more direct control */}
      <button onClick={handleAboutClick}>About Us</button> 
      {/* Or updated/working next/link usage, if applicable */}
      {/* <Link href="/about">
        <a>About Us</a>
      </Link> */}
    </div>
  );
}

export default MyComponent;
```