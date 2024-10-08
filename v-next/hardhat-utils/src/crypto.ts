import { createHash } from "node:crypto";

import { keccak256 as keccak256Impl } from "ethereum-cryptography/keccak";

/**
 * Computes the Keccak-256 hash of the input bytes.
 *
 * @param bytes The input bytes to hash.
 * @returns The Keccak-256 hash of the input bytes.
 */
export async function keccak256(bytes: Uint8Array): Promise<Uint8Array> {
  return keccak256Impl(bytes);
}

/**
 * Creates a non-cryptographic hash-based identifier for the given input.
 *
 * This function is primarily intended for generating unique identifiers from
 * a given input string.
 * It uses the MD5 hash algorithm, which is not cryptographically secure, but
 * is sufficient for this use case as long as the input is not generated by an
 * attacker.
 *
 * Note: The exact algorithm used (MD5) is not crucial for the function's
 * purpose of generating unique identifiers, and could be replaced if needed.
 *
 * @param data The input string to be hashed.
 * @returns The MD5 hash of the input string, represented as a
 * hexadecimal string.
 */
export function createNonCryptographicHashId(data: string): string {
  return createHash("md5").update(data).digest("hex");
}