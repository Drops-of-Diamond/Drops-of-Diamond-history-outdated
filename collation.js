var CollationHeader() =

    {
    shard_id: uint256,
    expected_period_number: uint256,
    period_start_prevhash: bytes32,
    parent_collation_hash: bytes32,
    tx_list_root: bytes32,
    coinbase: address,
    post_state_root: bytes32,
    receipts_root: bytes32,
    number: uint256,
    sig: bytes  
    };

