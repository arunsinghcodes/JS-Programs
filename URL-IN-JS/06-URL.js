// checking URL  validity in JavaScript.

/**
 * Validate a URL with the try-catch block. 
 * 
 */


try {
    const validUrl = new URL('path?name=arun');
    console.log(validUrl.href); // Outputs: "https://example.com/path?name=arun"    
} catch (error) {
    console.error('Invalid URL:', error.message);
}