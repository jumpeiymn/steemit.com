const jp = 	{
	// this variables mainly used in navigation section
	about: "Steemとは",
	explore: "探す",
	whitepaper: "Steem Whitepaper",
	buy_steem: "Steemを買う",
	sell_steem: "Steemを売る",
	market: "マーケット",
	stolen_account_recovery: "盗まれたアカウントの復旧",
	change_account_password: "パスワードの変更",
	steemit_chat: "Steemit チャット",
	witnesses: "Witnesses",
	privacy_policy: "プライバシーポリシー",
	terms_of_service: "利用規約",
	sign_up: "サインアップ",
	/* end navigation */
	buy: '買う',
	sell: '売る',
	buy_steem_power: 'Steem Powerを買う',
	transaction_history: '取引履歴',
	submit_a_story: 'ストーリーを投稿す投稿する',
	nothing_yet: 'まだなにもない',
	close: '閉じる',
	post_promo_text: "Authors get paid when people like you upvote their post \n If you enjoyed what you read here, earn ${amount} of Steem Power \n when you {link} and vote for it.",
	read_only_mode: 'サーバーのメンテナンスのため、読み専用モードに入ります。 ご迷惑をおかけします。',
	membership_invitation_only: 'Steemit.comのメンバーは招待者のみとなっております。',
	submit_email_to_get_on_waiting_list: 'メールアドレスを提出してキャンセル待ちリストに登録しよう',
	login: 'ログイン',
	logout: 'ログアウト',
	show_less_low_value_posts: "価値の低い投稿の出現頻度を減らす",
	show_more_low_value_posts: "価値の低い投稿の出現頻度を増やす",
	select_topic: 'トピックを選択する',
	tags_and_topics: "タグとトピック",
	filter: "フィルター",
	show_more_topics: "さらにトピックを見る",
	we_require_social_account: 'Steemit funds each account with over ${signup_bonus} worth of Steem Power; to prevent abuse, we require new users to login via social media.',
	personal_info_will_be_private: 'あなたの個人情報を保存する',
	personal_info_will_be_private_link: 'プライベート',
	continue_with_facebook: 'Facebookで続ける',
	continue_with_reddit: 'Redditで続ける',
	requires_positive_karma: 'Redditの積極的なcommentやkarmaが必要',
	dont_have_facebook: 'FacebookやRedditアカウントを持っていない?',
	subscribe_to_get_sms_confirm: 'SMS確認が利用可能になったら、通知する',
	by_verifying_you_agree: 'あなたが許可するアカウントで認証',
	by_verifying_you_agree_terms_and_conditions: '規約と条件を承認',
	terms_and_conditions: '規約と条件',
	// this is from top-right dropdown menu
	hot: '今話題',
	trending: 'トレンド',
	payout_time: 'ペイアウトタイミング',
	active: 'アクティブ',
	responses: '返信',
	popular: '有名',
	/* end dropdown menu */
	loading: 'ローディング',
	cryptography_test_failed: '暗号テストが失敗',
	unable_to_log_you_in: 'このブラウザではログインができません',
	latest_browsers_do_work: '最新の{chromeLink} や {mozillaLink} バージョンは、steemit.com上でちゃんと動きます',
	account_creation_succes: 'アカウント作成に成功しました!',
	account_recovery_succes: 'アカウントの復元に成功しました!',
	password_update_succes: '{accountName} さんのアカウントは更新されました',
	password_is_bound_to_account: "This password is bound to your account\'s owner key and can not be used to login to this site. \nHowever, you can use it to {changePasswordLink} to obtain a more secure set of keys.",
	update_your_password: 'パスワードを更新',
	enter_username: 'ユーザーネームを記入',
	password_or_wif: 'Password または WIF',
	requires_auth_key: 'この処理はあなたの {authType} キーを要求します (もしくはあなたのパスワード)',
	keep_me_logged_in: 'ログインし続ける',
	// this are used mainly in "submit a story" form
	title: "タイトル",
	write_your_story: 'あなたのストーリーを投稿する',
	editor: 'エディター',
	reply: 'リプライ',
	edit: '編集する',
	delete: '削除する',
	cancel: 'キャンセル',
	clear: 'クリア',
	save: 'セーブ',
	upvote_post: '投稿をupvoteする',
	update_post: '投稿をupvoteする',
	markdown_is_supported: 'Markdownでの記入ができます',
	preview: 'プレビュー',
	// TODO do not forget to implment REQUIRED error in reply Editor
	markdown_not_supported: 'Markdownはサポートされていません',
	// markdown: 'Markdown', // this will probably be removed
	welcome_to_the_blockchain: '新しいBlockchainの世界へようこそ!',
	your_voice_is_worth_something: 'あなたの言葉はどこかの世界のだれかに必ず役に立つ',
	learn_more: 'もっと学ぶ',
	get_sp_when_sign_up: '${signupBonus} 分のSteem Powerサインアップボーナスをゲットしよう',
	all_accounts_refunded: '復元されたアカウント全てに対して払い戻されます',
	steemit_is_now_open_source: 'Steemit.comはオープンソースプロジェクトです',
	// this is mainly from ReplyEditor
	tag_your_story: '最大5つまでタグ付けができます。最初のタグはメインカテゴリーになります',
	select_a_tag: 'タグを選択する',
	required: '必須',
	shorten_title: 'タイトルを短く',
	exceeds_maximum_length: '最大 ({maxKb}KB)を超えている',
	including_the_category: "('{rootCategory}'を含む)",
	use_limited_amount_of_tags: 'You have {tagsLength} tags total{includingCategory}. 最大5つのタグを選びましょう',
	// this is mainly used in CategorySelector
	use_limitied_amount_of_categories: ' {amount}だけカテゴリを選びましょう',
	use_one_dash: 'ダッシュ（-）は一回だけ',
	use_spaces_to_separate_tags: 'スペースでタグ分け',
	use_only_allowed_characters: '小文字、英数字、ダッシュのみ',
	must_start_with_a_letter: '文字から始める',
	must_end_with_a_letter_or_number: '文字が数字で終える',
	// tags page
	tag: 'タグ',
	replies: 'リプライ',
	payouts: 'ペイアウト',
	need_password_or_key: 'プライベートパスワードまたはキーが必要',
	// BlocktradesDeposit
	change_deposit_address: '預金アドレスを変える',
	get_deposit_address: '預金アドレスをゲットする',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by',
	send_amount_of_coins_to: '{coinName} へ {value} を送る',
	amount_is_in_form: 'Amount is in the form 99999.999',
	insufficent_funds: '残高不足',
	update_estimate: '見積もりを更新する',
	get_estimate: '見積もりをする',
	memo: 'メモ',
	must_include_memo: 'メモを含む必要がある',
	estimate_using: '見積もり',
	amount_to_send: '送る総額 {estimateInputCoin}',
	deposit_using: '預金', // example: 'Steem Powerの預金' // TODO: is this example right?
	suggested_limit: 'Suggested limit {depositLimit}',
	internal_server_error: 'サーバーエラー',
	enter_amount: '総額を入れる',
	processing: 'Processing',
	broadcasted: 'Broadcasted',
	confirmed: '確認',
	remove: '削除',
	collapse_or_expand: "Collapse/Expand",
	reveal_comment: 'コメントを公開する',
	are_you_sure: '大丈夫ですか?',
	// PostFull.jsx
	by: 'by',
	in: 'in',
	share: 'シェア',
	in_reply_to: 'in reply to',
	replied_to: 'replied to',
	transfer_amount_to_steem_power: "{amount} をSTEEM POWERへ移行する",
	transfer_amount_steem_power_to: "{amount} のSTEEM POWERを移行する",
	recieve_amount_steem_power_from: "{amount} のSTEEM POWERを受け取る",
	transfer_amount_steem_power_from_to: "{from}から{amount} のSTEEM POWER を移行する",
	transfer_amount_to: " {amount} へ移行する",
	recieve_amount_from: " {amount} を受け取る",
	transfer_amount_from: "{amount} を移行する",
	stop_power_down: "Stop power down",
	start_power_down_of: "Start power down of",
	curation_reward_of_steem_power_for: '{reward} STEEM POWERのキュレーションリワード',
	author_reward_of_steem_power_for: ' {payout} オーサーリワードと {reward} STEEM POWER',
	recieve_interest_of: ' {interest}の利子を受け取る',
	// TODO find where this is used and write an example
	to: 'to',
	account_not_found: 'アカウントが見つかりません',
	this_is_wrong_password: 'これは間違ったパスワードです',
	do_you_need_to: 'あなたは必要ですか',
	recover_your_account: 'アカウントを復元する', // this probably will end with question mark
	reset_usernames_password: " {username}さんのパスワードをリセットします",
	this_will_update_usernames_authtype_key: 'This will update {username} {authType} key',
	the_rules_of_steemit: "The first rule of Steemit is: Do not lose your password.<br /> The second rule of Steemit is: Do <strong>not</strong> lose your password.<br /> The third rule of Steemit is: We cannot recover your password.<br /> The fourth rule: If you can remember the password, it&apos;s not secure.<br /> The fifth rule: Use only randomly-generated passwords.<br /> The sixth rule: Do not tell anyone your password.<br /> The seventh rule: Always back up your password.",
	account_name: 'Account Name',
	recover_password: 'Recover Account',
	current_password: 'Current Password',
	recent_password: 'Recent Password',
	generated_password: 'Generated Password',
	recover_account: 'Recover Account',
	new: 'new', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'Back it up by storing in your password manager or a text file',
	click_to_generate_password: 'Click to generate password',
	re_enter_generate_password: 'Re-enter Generated Password',
	understand_that_steemit_cannot_recover_password: 'I understand that Steemit cannot recover lost passwords',
	i_saved_password: 'I have securely saved my generated password',
	update_password: 'Update Password',
	password_must_be_characters_or_more: 'Password must be {amount} characters or more',
	passwords_do_not_match: 'Passwords do not match',
	you_need_private_password_or_key_not_a_public_key: 'You need a private password or key (not a public key)',
	account_updated: 'Account Updated',
	warning: 'warning',
	your_password_permissions_were_reduced: 'Your password permissions were reduced',
	if_you_did_not_make_this_change: 'If you did not make this change please',
	owhership_changed_on: 'Ownership Changed On',
	deadline_for_recovery_is: 'Deadline for recovery is',
	i_understand_dont_show_again: "I understand, don't show me again",
	ok: 'Ok',
	convert_to_steem: 'Convert to Steem',
	steem_dollars_will_be_unavailable: 'This action will take place one week from now and can not be canceled. These Steem Dollars will immediatly become unavailable',
	amount: 'Amount',
	steem_dollars: 'STEEM DOLLARS',
	convert: 'Convert',
	invalid_amount: 'Invalid amount',
	insufficent_balance: 'Insufficient balance',
	in_week_convert_steem_dollars_to_steem: 'In one week, convert {amount} STEEM DOLLARS into STEEM',
	order_placed: 'Order placed', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'Follow',
	unfollow: 'Unfollow',
	mute: 'Mute',
	unmute: 'Unmute',
	confirm_password: 'Confirm Password',
	login_to_see_memo: 'login to see memo',
	post: 'Post', // places used: tooltip in MediumEditor
	unknown: 'Unknown', // exp.: 'unknown error'
	account_name_is_not_available: 'Account name is not available',
	type: 'Type',
	price: 'Price',
	// Market.jsx
	last_price: 'Last price',
	'24h_volume': '24h volume',
	bid: 'Bid',
	ask: 'Ask',
	spread: 'Spread',
	total: 'Total',
	available: 'Available',
	lowest_ask: 'Lowest ask',
	highest_bid: 'Highest bid',
	buy_orders: 'Buy Orders',
	sell_orders: 'Sell Orders',
	trade_history: 'Trade History',
	open_orders: 'Open Orders',
	sell_amount_for_atleast: 'Sell {amount_to_sell} for at least {min_to_receive} ({effectivePrice})',
	buy_atleast_amount_for: 'Buy at least {min_to_receive} for {amount_to_sell} ({effectivePrice})',
	higher: 'Higher', // context is about prices
	lower: 'Lower', // context is about prices
	total_sd_dollars: "Total SD ($)",
	sd_dollars: "SD ($)",
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: 'Not valid',
	account_name_is_not_found: 'Account name is not found',
	unable_to_recover_account_not_change_ownership_recently: 'We are unable to recover this account, it has not changed ownership recently.',
	password_not_used_in_last_days: 'This password was not used on this account in the last 30 days.',
	request_already_submitted_contact_support: 'Your request has been already submitted and we are working on it. Please contact support@steemit.com for the status of your request.',
	recover_account_intro: "From time to time, a Steemian’s owner key may be compromised. Stolen Account Recovery gives the rightful account owner 30 days to recover their account from the moment the thief changed their owner key. Stolen Account Recovery can only be used on steemit.com if the account owner had perviously listed ‘Steemit’ as their account trustee and complied with Steemit’s Terms of Service.",
	login_with_facebook_or_reddit_media_to_verify_identity: 'Please login with Facebook or Reddit to verify your identity',
	login_with_social_media_to_verify_identity: 'Please login with {show_social_login} to verify you identity',
	enter_email_toverify_identity: 'We need to verify your identity. Please enter your email address below to begin the verification.',
	email: 'Email',
	continue_with_email: "Continue with Email",
	thanks_for_submitting_request_for_account_recovery: '<p>Thanks for submitting your request for Account Recovery using Steem’s blockchain-based multi factor authentication.</p> <p>We will respond to you as quickly as possible, however, please expect there may be some delay in response due to high volume of emails.</p> <p>Please be prepared to verify your identity.</p> <p>Regards,</p> <p>Ned Scott</p> <p>CEO Steemit</p>',
	recovering_account: 'Recovering account',
	checking_account_owner: 'Checking account owner',
	sending_recovery_request: 'Sending recovery request',
	cant_confirm_account_ownership: 'We can\'t confirm account ownership. Check your password',
	account_recovery_request_not_confirmed: "Account recovery request is not confirmed yet, please get back later, thank you for your patience.",
	vote: 'Vote',
	witness: 'Witness',
	top_witnesses: 'Top Witnesses',
	// user's navigational menu
	feed: 'Feed',
	wallet: 'Wallet',
	blog: 'Blog',
	change_password: 'Change Password',
	// UserProfile
	unknown_account: 'Unknown Account',
	user_hasnt_made_any_posts_yet: "Looks like {name} hasn't made any posts yet!",
	user_hasnt_started_bloggin_yet: "Looks like {name} hasn't started blogging yet!",
	user_hasnt_followed_anything_yet: "Looks like {name} hasn't followed anything yet!",
	user_hasnt_had_any_replies_yet: "{name} hasn't had any replies yet",
	users_blog: "{name}'s blog",
	users_posts: "{name}'s posts",
	users_wallet: "{name}'s wallet",
	users_curation_rewards: "{name}'s curation rewards",
	users_author_rewards: "{name}'s author rewards",
	users_permissions: "{name}'s permissions",
	recent_replies_to_users_posts: "Recent replies to {name}'s posts",
	print: 'Print',
	curation_rewards: "Curation rewards",
	author_rewards: 'Author rewards',
	feeds: 'Feeds',
	rewards: 'Rewards',
	permissions: 'Permissions',
	password: 'Password',
	posts: 'Posts',
	// english language does not need plurals, but your language might need it
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		zero {0 posts}
		one {# post}
		few {# posts}
		many {# posts}
	}`,
	follower_count: `{followerCount, plural,
		zero {0 followers}
		one {# followers}
		few {# followers}
		many {# followers}
	}`,
	followed_count: `{followingCount, plural,
		zero {0 followed}
		one {# followed}
		few {# followed}
		many {# followed}
	}`,
	vote_count: `{voteCount, plural,
		zero {0 votes}
		one {# votes}
		few {# votes}
		many {# votes}
	}`,
	response_count: `{responseCount, plural,
		zero {0 responses}
		one {# responses}
		few {# responses}
		many {# responses}
	}`,
	reply_count: `{replyCount, plural,
		zero {0 replies}
		one {# replies}
		few {# replies}
		many {# replies}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "This is ${name}'s reputation score.\n\nThe reputation score is based on the history of votes received by the account, and is used to hide low quality content.",
	newer: 'Newer',
	older: 'Older',
	author_rewards_last_24_hours: 'Author rewards last 24 hours',
	daily_average_author_rewards: 'Daily average author rewards',
	author_rewards_history: 'Author Rewards History',
	balances: 'Balances',
	estimate_account_value: 'Estimated Account Value',
	next_power_down_is_scheduled_to_happen_at: 'The next power down is scheduled to happen',
	transfers_are_temporary_disabled: 'Transfers are temporary disabled',
	history: 'History',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: 'Curation rewards last 24 hours',
	daily_average_curation_rewards: 'Daily average curation rewards',
	estimated_curation_rewards_last_week: "Estimated curation rewards last week",
	curation_rewards_last_week: "Curation rewards last week",
	curation_rewards_history: 'Curation Rewards History',
	// Post.jsx
	now_showing_comments_with_low_ratings: 'Now showing comments with low ratings',
	hide: 'Hide',
	show: 'Show',
	sort_order: 'Sort Order',
	comments_were_hidden_due_to_low_ratings: 'Comments were hidden due to low ratings',
	we_will_be_unable_to_create_account_with_this_browser: 'We will be unable to create your Steem account with this browser',
	you_need_to_logout_before_creating_account: 'You need to {logoutLink} before you can create another account',
	steemit_can_only_register_one_account_per_verified_user: 'Please note that Steemit can only register one account per verified user',
	username: 'Username',
	couldnt_create_account_server_returned_error: "Couldn't create account. Server returned the following error",
	form_requires_javascript_to_be_enabled: 'This form requires javascript to be enabled in your browser',
	our_records_indicate_you_already_have_account: 'Our records indicate that you already have steem account',
	to_prevent_abuse_steemit_can_only_register_one_account_per_user: 'In order to prevent abuse (each registered account costs 3 STEEM) Steemit can only register one account per verified user.',
	you_can_either_login_or_send_us_email: 'You can either {loginLink} to your existing account or  if you need a new account',
	send_us_email: 'send us email',
	connection_lost_reconnecting: 'Connection lost, reconnecting',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'Stop seeing content from this user',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: 'Flagging a post can remove rewards and make this material less visible. The flag should be used for the following',
	fraud_or_plagiarism: 'Fraud or Plagiarism',
	hate_speech_or_internet_trolling: 'Hate Speech or Internet Trolling',
	intentional_miss_categorized_content_or_spam: 'Intentional miss-categorized content or Spam',
	downvote: 'Downvote',
	pending_payout: 'Pending Payout',
	past_payouts: 'Past Payouts',
	and: 'and',
	more: 'more',
	remove_vote: 'Remove Vote',
	upvote: 'Upvote',
	we_will_reset_curation_rewards_for_this_post: 'will reset your curation rewards for this post',
	removing_your_vote: 'Removing your vote',
	changing_to_an_upvote: 'Changing to an Up-Vote',
	changing_to_a_downvote: 'Changing to a Down-Vote',
	confirm_flag: 'Confirm Flag',
	//  TODO
	date_created: 'Date Created',
	search: 'Search',
	begin_recovery: "Begin Recovery",
	post_as: 'Post as', // 'Post as Misha'
	action: 'Action',
	steem_app_center: 'Steem App Center',
	witness_thread: 'witness thread',
	you_have_votes_remaining: 'You have {votesCount} votes remaining',
	you_can_vote_for_maximum_of_witnesses: 'You can vote for a maximum of 30 witnesses',
	information: 'Information',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'If you would like to vote for a witness outside of the top 50, enter the account name below to cast a vote',
	view_the_direct_parent: 'View the direct parent',
	you_are_viewing_single_comments_thread_from: 'You are viewing a single comment&#39;s thread from',
	view_the_full_context: 'View the full context',
	this_is_a_price_feed_conversion: 'This is a price feed conversion. The one week day delay is necessary to prevent abuse from gaming the price feed average',
	your_existing_SD_are_liquid_and_transferable: 'Your existing Steem Dollars are liquid and transferable.  Instead you may wish to trade Steem Dollars directly in this site under {link} or transfer to an external market.',
	buy_or_sell: 'Buy or Sells',
	trending_30_day: 'trending (30 day)',
	promoted: 'promoted',
	comments: 'Comments',
	topics: 'Topics',
	this_password_is_bound_to_your_accounts_private_key: 'This password is bound to your account\'s active key and can not be used to login to this page. You may use this active key on other more secure pages like the Wallet or Market pages.',
	potential_payout: 'Potential Payout',
	boost_payments: 'Boost Payments',
	authors: 'Authors',
	curators: 'Curators',
	date: 'Date',
	no_responses_yet_click_to_respond: 'No responses yet. Click to respond.',
	click_to_respond: 'Click to respond',
	new_password: 'New Password',
	paste_a_youtube_or_vimeo_and_press_enter: 'Paste a YouTube or Vimeo and press Enter',
	there_was_an_error_uploading_your_image: 'There was an error uploading your image',
	raw_html: 'Raw HTML',
	please_remove_following_html_elements: 'Please remove the following HTML elements from your post: ',
	reputation: "Reputation",
	remember_voting_and_posting_key: "Remember voting & posting key",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: 'Auto login?',
	yes: 'Yes',
	no: 'No',
	hide_private_key: 'Hide private key',
	login_to_show: 'Login to show',
	steemit_cannot_recover_passwords_keep_this_page_in_a_secure_location: 'Steemit cannot recover passwords.  Keep this page in a secure location, such as a fireproof safe or safety deposit box.',
	steemit_password_backup: 'Steemit Password Backup',
	steemit_password_backup_required: 'Steemit Password Backup (required)',
	after_printing_write_down_your_user_name: 'After printing, write down your user name',
	public: 'Public',
	private: 'Private',
	public_something_key: 'Public {key} Key',
	private_something_key: 'Private {key} Key',
	posting_key_is_required_it_should_be_different: 'The posting key is used for posting and voting. It should be different from the active and owner keys.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'The active key is used to make transfers and place orders in the internal market.',
	the_owner_key_is_required_to_change_other_keys: 'The owner key is the master key for the account and is required to change the other keys.',
	the_private_key_or_password_should_be_kept_offline: 'The private key or password for the owner key should be kept offline as much as possible.',
	the_memo_key_is_used_to_create_and_read_memos: 'The memo key is used to create and read memos.',
	previous: 'Previous',
	next: 'Next',
	browse: 'Browse',
	not_valid_email: 'Not valid email',
	thank_you_for_being_an_early_visitor_to_steemit: 'Thank you for being an early visitor to Steemit. We will get back to you at the earliest possible opportunity.',
	estimated_author_rewards_last_week: "Estimated author rewards last week",
	author_rewards_last_week: "Estimated author rewards last week",
	confirm: 'Confirm',
	canceled: 'Canceled',
	asset: "Asset",
	this_memo_is_private: 'This Memo is Private',
	this_memo_is_public: 'This Memo is Public',
	power_up: 'Power Up',
	transfer: 'Transfer',
	basic: 'Basic',
	advanced: 'Advanced',
	convert_to_steem_power: 'Convert to Steem Power',
	transfer_to_account: 'Transfer to Account',
	buy_steem_or_steem_power: 'Buy Steem or Steem Power',
	version: 'Version',
	about_steemit: 'About Steemit',
	steemit_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: 'Steemit is a social media platform where <strong>everyone</strong>&nbsp;gets <strong>paid</strong> for creating and curating content',
	steemit_is_a_social_media_platform_where_everyone_gets_paid: 'Steemit is a social media platform where everyone gets paid for creating and curating content. It leverages a robust digital points system, called Steem, that supports real value for digital rewards through market price discovery and liquidity.',
	learn_more_at_steem_io: 'Learn more at steem.io',
	resources: 'Resources',
	steem_whitepaper: 'Steem Whitepaper',
	join_our_slack: 'Join our Slack',
	steemit_support: 'Steemit Support',
	please_email_questions_to: 'Please email your questions to',
	sorry_your_reddit_account_doesnt_have_enough_karma: "Sorry, your Reddit account doesn't have enough Reddit Karma to qualify for a free sign up. Please add your email for a place on the waiting list",
	register_with_facebook: 'Register with Facebook',
	or_click_the_button_below_to_register_with_facebook: 'Or click the button below to register with Facebook',
	trending_24_hour: 'trending (24 hour)',
	home: 'home',
	'24_hour': '24 hour',
	'30_day': '30 day',
	flag: "Flag",

}

export { jp }
