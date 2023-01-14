<?php
// Generate the second part of the hashed string using the charset
// as a set of possible characters
function ft_keygen($charset, $strength = 8)
{
    $key = '';
    $input_length = strlen($charset);

    for ($i = 0; $i < $strength; $i++) {
        $random_character = $charset[mt_rand(0, $input_length - 1)];
        $key.= $random_character;
    }
    return $key;
}

// Message encryption with openssl suite
function ft_encrypt_message($plaintext, $key)
{
    $ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC");
    $iv = openssl_random_pseudo_bytes($ivlen);
    $ciphertext_raw = openssl_encrypt(
        $plaintext, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv
    );
    $hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true);
    $ciphertext = base64_encode($iv.$hmac.$ciphertext_raw);
    return $ciphertext;
}