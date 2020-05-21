<?php
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\Framework;

/**
 * Interface for Classes that can return a description of itself.
 */
interface SelfDescribing
{
    /**
     * Returns a string representation of the object.
     */
    public function toString(): string;
}