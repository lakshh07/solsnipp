// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/console.sol";

library SafeMath {
    function add(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require((z = x + y) >= x, "ds-math-add-overflow");
    }
}

contract SolSnipp is Ownable, ReentrancyGuard {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _snippetsCount;

    struct Snippet {
        uint256 id;
        string label;
        string description;
        string hash;
        bool status;
        address owner;
    }

    event SnippetCreated(
        uint256 id,
        string label,
        string description,
        string hash,
        bool status,
        address owner
    );

    mapping(uint256 => Snippet) idToSnippet;

    function createSnippet(
        string memory _label,
        string memory _description,
        string memory _hash,
        bool _approveStatus
    ) external nonReentrant {
        require(bytes(_hash).length > 0, "hash required");

        _snippetsCount.increment();
        uint256 snippetCount = _snippetsCount.current();

        idToSnippet[snippetCount] = Snippet(
            snippetCount,
            _label,
            _description,
            _hash,
            _approveStatus,
            msg.sender
        );

        emit SnippetCreated(
            snippetCount,
            _label,
            _description,
            _hash,
            _approveStatus,
            msg.sender
        );
    }

    function approve(uint256 _id) external onlyOwner nonReentrant {
        require(_id >= _snippetsCount.current());
        idToSnippet[_id].status = true;
    }

    function fetchSnippets() external view returns (Snippet[] memory) {
        uint256 totalSnippetCount = _snippetsCount.current();
        uint256 currentIndex = 0;

        Snippet[] memory snippet = new Snippet[](totalSnippetCount);

        for (uint256 i = 0; i < totalSnippetCount; i++) {
            uint256 currentNumber = i.add(1);
            Snippet storage currentSnippet = idToSnippet[currentNumber];
            snippet[currentIndex] = currentSnippet;
            currentIndex += 1;
        }
        return snippet;
    }
}
